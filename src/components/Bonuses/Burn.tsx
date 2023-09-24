import React, { FC, useEffect, useState } from "react";
import { ModalTitle, ModalContent } from "../ModalStyles";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { fetchBalance } from "wagmi/actions";
import styled from "styled-components";

import testVerseABI from "../../contracts/testVerseABI";
import { goerli } from "viem/chains";
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
  const [verseBalance, setVerseBalance] = useState<{
    formatted: string;
    value: bigint;
  }>();

  const { address } = useAccount();

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    address: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",
    abi: testVerseABI,
    functionName: "burn",
    chainId: goerli.id,
  });

  const { data: txData, isSuccess: txWaitSuccess } =
    useWaitForTransaction(data);

  const [newCookies, setNewCookies] = useState(0);
  const [hours, setHours] = useState(buttonsList[0].hours);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (!address) return;
    const getAccountBalance = async () => {
      try {
        const res = await fetchBalance({
          address,
          chainId: goerli.id,
          token: "0x37D4203FaE62CCd7b1a78Ef58A5515021ED8FD84",
        });
        setVerseBalance({ formatted: res.formatted, value: res.value });
      } catch (error) {
        console.log("Error fetching balance");
      }
    };
    getAccountBalance();
  }, [address]);

  useEffect(() => {
    if (!txData) return;
    console.log("txdata", txData);

    const now = new Date();
    const extraTime = new Date(now.getTime() + ((hours * 60 * 60) ^ 1000));
    const diff = Math.abs(now.getTime() - extraTime.getTime()) / 1000;
    const cookieDiff = diff * aMPF * 1000 * frameRate;

    console.log(cookieDiff);
    setNewCookies(cookieDiff);
    dispatch({
      type: "EARN_COOKIE",
      payload: cookieDiff / frameRate,
    });
  }, [txData]);

  const handleBurn = async (amount: bigint, h: number) => {
    setHours(h);
    try {
      await writeAsync({
        args: [amount],
      });
    } catch (error) {
      console.log("write error", error);
    }

    // setTransaction(resp);
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
        {verseBalance?.formatted
          ? Number(verseBalance.formatted).toLocaleString()
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
          verseBalance={verseBalance?.value || BigInt(0)}
          buttons={buttonsList}
        />
      </ButtonContainer>
    </ModalContent>
  );
};

export default Burn;
