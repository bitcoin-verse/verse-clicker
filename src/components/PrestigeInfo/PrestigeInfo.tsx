import React, { FC, useEffect, useState } from "react";
import { formatEther } from "viem";
import {
  useAccount,
  useChainId,
  useContractReads,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { useTrackedState } from "../../context/store";
import { PRESTIGE_SEPOLIA_ADDRESS } from "../../contracts/constants";
import getPrestigeDetails from "../../contracts/getPrestigeDetails.ts";
import getVerseTokenDetails from "../../contracts/getVerseTokenDetails";
import getPrestigeData from "../../helpers/getPrestigeData";
import getPrestigeSignature from "../../helpers/getPrestigeSignature";
import { H1 } from "../H1";
import { Wrapper } from "./styled";

interface Props {
  toggleOpen?: boolean;
  setToggleOpen?: (open: boolean) => void;
}

const UNLOCK_MULTIPLIER = [0.05, 0.25, 0.5, 0.75, 1];

const UNLOCKS = [
  {
    label: "5%",
    cost: 11,
  },
  { label: "25%", cost: 1111 },
  { label: "50%", cost: 111111 },
  { label: "75%", cost: 11111111 },
  { label: "100%", cost: 1111111111 },
];

const PrestigeInfo: FC<Props> = ({ toggleOpen, setToggleOpen }) => {
  const { address } = useAccount();
  const chainId = useChainId();
  const { gameMode, player } = useTrackedState();
  const prestigeContractDetails = getPrestigeDetails(chainId);
  const verseContractDetails = getVerseTokenDetails(chainId);
  const [isOpen, setIsOpen] = useState(false);

  const { data, refetch } = useContractReads({
    contracts: [
      {
        ...prestigeContractDetails,
        functionName: "balanceOf",
        args: address ? [address, 0n] : [PRESTIGE_SEPOLIA_ADDRESS, 0n],
      },
      {
        ...prestigeContractDetails,
        functionName: "nonces",
        args: address ? [address] : [PRESTIGE_SEPOLIA_ADDRESS],
      },
      {
        ...verseContractDetails,
        functionName: "allowance",
        args: address ? [address, PRESTIGE_SEPOLIA_ADDRESS] : [],
      },
      {
        ...prestigeContractDetails,
        functionName: "uri",
        args: [0],
      },
    ],
  });

  const { write, data: writeData } = useContractWrite({
    ...prestigeContractDetails,
    functionName: "increasePrestigeLevel",
  });

  const { status } = useWaitForTransaction(writeData);

  useEffect(() => {
    if (status === "success") {
      refetch();
    }
  }, [status]);

  useEffect(() => {
    console.log(data);

    const getTokenData = async () => {
      if (!data || typeof data?.[3].result !== "string") return;

      const level = await getPrestigeData(data[3].result, 0);
      const points = await getPrestigeData(data[3].result, 1);

      console.log(level, points);
    };

    getTokenData();
  }, [data]);

  useEffect(() => {
    if (toggleOpen && setToggleOpen) {
      setIsOpen(true);

      setToggleOpen(false);
    }
  }, [toggleOpen]);

  return (
    <Wrapper $isOpen={isOpen}>
      <H1>Prestige</H1>

      <div>Your prestige: {player.prestige.level}</div>
      <div>Prestige level: {player.prestige.level}%</div>
      <div>
        Unlocked multiplier: {UNLOCK_MULTIPLIER[player.prestige.unlocked]}%
      </div>
      <div>
        Effective multiplier:{" "}
        {UNLOCK_MULTIPLIER[player.prestige.unlocked] *
          (player.prestige.level / 100)}
        %
      </div>

      {UNLOCKS.map((c, i) => {
        if (i < player.prestige.unlocked) return;

        return (
          <button
            type="button"
            key={c.label}
            disabled={player.prestige.unlocked < i || player.cookies < c.cost}
          >
            Unlock {c.label} for {c.cost} points
          </button>
        );
      })}
      <hr />
      <button
        type="button"
        onClick={async () => {
          if (!address) return;
          const signData = await getPrestigeSignature(address, gameMode);
          console.log("prestige", signData);
          if (!signData) return;

          const res = write({
            args: [signData?.signature, signData?.message],
          });

          console.log(res);
        }}
      >
        Prestige
      </button>
      <div>Status: {status}</div>
    </Wrapper>
  );
};

export default PrestigeInfo;
