import React, { FC, useEffect, useState } from "react";
import { useChainId, useContractWrite, useWaitForTransaction } from "wagmi";
import { formatEther, parseEther } from "viem";

import { formatNumber } from "../../../helpers/formatNumber";
import { useSocketCtx } from "../../../context/SocketContext";
import useVerseBalance from "../../../hooks/useVerseBalance";
import { Divider, Icon, ModalWrapper, Price, StyledButton } from "../styled";
import { H3 } from "../../H3";
import { Container } from "../../Container";
import { Label } from "../../Label";

import verseIcon from "../../../assets/verse-icon.png";
import Tabs, { TabButton } from "../../Tabs";
import { LinkButton } from "../../LinkButton";

import WarningChip from "../../WarningChip";
import {
  BURN_ENGINE_ADDRESSES,
  VERSE_TOKEN_CONTRACTS,
} from "../../../contracts";

import Spinner from "../../Icons/Spinner";

const burnList = [
  { title: "1 hour", value: 15000, hours: 1 },
  { title: "12 hour", value: 150000, hours: 12 },
  { title: "1 day", value: 280000, hours: 24 },
];

const Burn: FC = () => {
  const { socket } = useSocketCtx();
  const { data: readData, error } = useVerseBalance();
  const chainId = useChainId();
  const [newCookies, setNewCookies] = useState<number>();

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    address: VERSE_TOKEN_CONTRACTS[chainId].address,
    abi: VERSE_TOKEN_CONTRACTS[chainId].abi,
    functionName: "transfer",
    chainId,
  });

  const { isSuccess: txWaitSuccess } = useWaitForTransaction(data);

  const [showLoading, setShowLoading] = useState(false);

  const [balanceData, setBalanceData] = useState<{
    formatted: string;
    value: bigint;
  }>();

  const [selectedTab, setSelectedTab] = useState(0);
  const selectedBurn =
    burnList.find((_, i) => i === selectedTab) ?? burnList[0];
  const insufficientVerse = balanceData
    ? selectedBurn.value > balanceData.value
    : true;

  useEffect(() => {
    if (!readData) return;
    setBalanceData({ value: readData, formatted: formatEther(readData) });
  }, [readData, error]);

  useEffect(() => {
    if (isLoading || isSuccess || txWaitSuccess) {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  }, [isLoading, isSuccess, txWaitSuccess]);

  useEffect(() => {
    const onBonus = (data: number) => {
      setNewCookies(data);
    };
    socket.on("bonus", onBonus);

    return () => {
      socket.off("bonus", onBonus);
    };
  }, []);

  const handleBurn = async (amount: number) => {
    try {
      await writeAsync({
        args: [BURN_ENGINE_ADDRESSES[chainId], parseEther(amount.toString())],
      });
    } catch (error) {
      console.log("Write error", error);
    }
  };

  return (
    <ModalWrapper>
      {showLoading ? (
        <>
          {isLoading && (
            <>
              <Label>Pending transaction, check your wallet.</Label>
              <Spinner />
            </>
          )}
          {isSuccess && !txWaitSuccess && (
            <>
              <Label>Transaction accepted, waiting for confirmation.</Label>
              <Spinner />
              <LinkButton
                href={`https://goerli.etherscan.io/tx/${data?.hash}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Etherscan
              </LinkButton>
            </>
          )}
          {txWaitSuccess && !newCookies && (
            <>
              <Label>Transaction confirmed, calculating bonus</Label>
              <Spinner />
              <LinkButton
                href={`https://goerli.etherscan.io/tx/${data?.hash}`}
                target="_blank"
                rel="noreferrer"
              >
                View on Etherscan
              </LinkButton>
            </>
          )}
          {txWaitSuccess && newCookies && (
            <>
              <H3>Bonus Awarded!</H3>
              <Label>
                {burnList[selectedTab].value.toLocaleString()} VERSE burned
              </Label>
              <Label>{burnList[selectedTab].title} skipped</Label>
              <Label>{formatNumber(newCookies)} points added</Label>
            </>
          )}
        </>
      ) : (
        <>
          <H3>Burn VERSE to boost your point production</H3>
          <Container>
            <Label $color="secondary">Boost duration</Label>
            <Tabs
              center
              mobileVersion
              tabs={burnList.map((button, i) => (
                <TabButton
                  key={i}
                  $mobileVersion
                  $isSelected={selectedTab === i}
                  type="button"
                  onClick={() => setSelectedTab(i)}
                >
                  {button.title}
                </TabButton>
              ))}
            />
            <Label $color="secondary">Quantity required</Label>
            <Price>
              <Icon src={verseIcon} />
              <Label $color={insufficientVerse ? "warning" : undefined}>
                {selectedBurn?.value.toLocaleString()} VERSE
              </Label>
            </Price>
            <Divider />
            <Label $color="secondary">
              Available:{" "}
              {balanceData?.formatted
                ? Number(balanceData.formatted).toLocaleString()
                : 0}{" "}
              VERSE
            </Label>
          </Container>
          {insufficientVerse && (
            <WarningChip link="https://buy.bitcoin.com/verse">
              You don&#39;t have enough VERSE. Buy now!
            </WarningChip>
          )}
          <StyledButton
            onClick={() => handleBurn(selectedBurn?.value)}
            disabled={insufficientVerse}
          >
            Burn VERSE
          </StyledButton>
        </>
      )}
    </ModalWrapper>
  );
};

export default Burn;
