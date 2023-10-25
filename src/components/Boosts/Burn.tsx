import React, { FC, useEffect, useState } from "react";
import { useChainId, useContractWrite, useWaitForTransaction } from "wagmi";
import styled from "styled-components";
import { formatEther, parseEther } from "viem";

import testVerseABI from "../../contracts/verseGoerli";
import BurnButtons from "./BurnButtons";
import { formatNumber } from "../../helpers/formatNumber";
import { useSocketCtx } from "../../context/SocketContext";
import useVerseBalance from "../../hooks/useVerseBalance";
import { Divider, Icon, ModalWrapper, Price, StyledButton } from "./styled";
import { H3 } from "../H3";
import { Container } from "../Container";
import { Label } from "../Label";

import verseIcon from "../../assets/verse-icon.png";
import { Button } from "../Button";
import Tabs, { TabButton } from "../Tabs";

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
    address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",
    abi: testVerseABI,
    functionName: "burn",
    chainId,
  });

  const { isSuccess: txWaitSuccess } = useWaitForTransaction(data);

  const [showLoading, setShowLoading] = useState(false);

  const [balanceData, setBalanceData] = useState<{
    formatted: string;
    value: bigint;
  }>();

  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    console.log(readData, error);
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
        args: [parseEther(amount.toString())],
      });
    } catch (error) {
      console.log("Write error", error);
    }
  };

  return (
    <ModalWrapper>
      <H3>Burn VERSE to boost your point production</H3>
      <Container>
        <Label $secondary $size="0.75">
          Boost duration
        </Label>
        <Tabs
          center
          tabs={buttonsList.map((button, i) => (
            <TabButton
              key="burns"
              $isSelected={selectedTab === i}
              type="button"
              onClick={() => setSelectedTab(i)}
            >
              {button.title}
            </TabButton>
          ))}
        />
        <Label $secondary $size="0.75">
          Quantity required
        </Label>
        <Price>
          <Icon src={verseIcon} />
          {buttonsList.find((_, i) => i === selectedTab)?.value} VERSE
        </Price>
        <Divider />
        <Label $secondary $size="0.75">
          Available:{" "}
          {balanceData?.formatted
            ? Number(balanceData.formatted).toLocaleString()
            : 0}{" "}
          VERSE
        </Label>
      </Container>
      <StyledButton>Burn VERSE</StyledButton>
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
    </ModalWrapper>
  );
};

export default Burn;
