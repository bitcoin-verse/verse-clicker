import React, { FC, useEffect, useState } from "react";
import { ModalTitle, ModalContent } from "../ModalStyles";
import {
  useAccount,
  useChainId,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import styled from "styled-components";
import { formatEther, parseEther } from "viem";

import testVerseABI from "../../contracts/testVerseABI";
import BurnButtons from "./BurnButtons";
import { useDispatch, useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  position: relative;
`;

const TransactionStatus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0f518f;
  z-index: 1;

  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RetryButton = styled.button`
  padding: 1rem;
  font-weight: 600;
  outline: none;

  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 1rem;
  background: #163756;
  color: white;
`;

const buttonsList = [
  { title: "1H", value: 15000, hours: 1 },
  { title: "12H", value: 150000, hours: 12 },
  { title: "24H", value: 280000, hours: 24 },
];

const Burn: FC = () => {
  const {
    player: { aMPF },
    settings: { frameRate },
  } = useTrackedState();

  const dispatch = useDispatch();
  const { address } = useAccount();
  const chainId = useChainId();

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",
    abi: testVerseABI,
    functionName: "burn",
    chainId,
  });

  const { data: txData, isSuccess: txWaitSuccess } =
    useWaitForTransaction(data);

  const { data: readData, error } = useContractRead({
    address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",

    abi: testVerseABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    account: address,
    watch: true,
  });

  const [newCookies, setNewCookies] = useState(0);
  const [hours, setHours] = useState(buttonsList[0].hours);
  const [showLoading, setShowLoading] = useState(false);

  const [balanceData, setBalanceData] = useState<{
    formatted: string;
    value: bigint;
  }>();

  useEffect(() => {
    console.log(readData, error);
    if (!readData) return;
    setBalanceData({ value: readData, formatted: formatEther(readData) });
  }, [readData, error]);

  useEffect(() => {
    if (!txData || !address) return;
    console.log("txdata", txData);

    const now = new Date();
    const extraTime = new Date(now.getTime() + ((hours * 60 * 60) ^ 1000));
    const diff = Math.abs(now.getTime() - extraTime.getTime()) / 1000;
    const cookieDiff = diff * aMPF * 1000 * frameRate;

    setNewCookies(cookieDiff);
    dispatch({
      type: "EARN_COOKIE",
      payload: cookieDiff,
    });
    dispatch({ type: "RECALCULATE_CPS" });
  }, [txData, address]);

  const handleBurn = async (amount: number, h: number) => {
    setHours(h);
    try {
      console.log(amount, parseEther(amount.toString()));
      await writeAsync({
        args: [parseEther(amount.toString())],
      });
    } catch (error) {
      console.log("write error", error);
    }
  };

  useEffect(() => {
    if (isLoading || isSuccess || txWaitSuccess) {
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  }, [isLoading, isSuccess, txWaitSuccess]);

  return (
    <ModalContent>
      <ModalTitle>Burn to earn (BETA)</ModalTitle>
      <div>
        Get upto 24hrs worth of cookies at your current CPS rate, just by
        burning a little verse
      </div>
      <div>
        Your Verse Balance:{" "}
        {balanceData?.formatted
          ? Number(balanceData.formatted).toLocaleString()
          : 0}{" "}
        VERSE
      </div>

      <ButtonContainer>
        {showLoading && (
          <TransactionStatus>
            {isLoading && <div>Transaction Pending. Check Wallet</div>}
            {isSuccess && !txWaitSuccess && (
              <>
                <div>Transaction accepted waiting for confirmation</div>
                <a
                  href={`https://goerli.etherscan.io/tx/${data?.hash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Etherscan
                </a>
              </>
            )}

            {txWaitSuccess && (
              <>
                <div>
                  Transaction confirmed! {formatNumber(newCookies)} cookies
                  added
                </div>

                <RetryButton
                  onClick={() => {
                    setShowLoading(false);
                  }}
                >
                  Burn again!
                </RetryButton>
              </>
            )}
          </TransactionStatus>
        )}
        <BurnButtons
          isLoading={isLoading}
          handleBurn={handleBurn}
          verseBalance={balanceData?.value || BigInt(0)}
          buttons={buttonsList}
        />
      </ButtonContainer>
    </ModalContent>
  );
};

export default Burn;
