import React, { FC, useEffect, useState } from "react";
import {
  useAccount,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from "wagmi";
import { formatEther, parseEther } from "viem";

import { useSocketCtx } from "../../../../context/SocketContext";
import useVerseBalance from "../../../../hooks/useVerseBalance";
import { getBurnEngineExplorerLink } from "../../../../helpers/getBurnEngineExplorerLink";
import {
  Divider,
  Icon,
  ModalWrapper,
  Price,
  StyledButton,
  Footnote,
} from "../../styled";
import { H3 } from "../../../H3";
import { Container } from "../../../Container";
import { Label } from "../../../Label";
import { Link } from "../../../Link";

import verseIcon from "../../../../assets/verse-icon.png";
import Tabs, { TabButton } from "../../../Tabs";

import WarningChip from "../../../WarningChip";

import getVerseTokenDetails from "../../../../contracts/getVerseTokenDetails";
import getBurnEngineDetails from "../../../../contracts/getBurnEngineDetails";
import LoadingStates from "./LoadingStates";
import { useTrackedState } from "../../../../context/store";
import { logAmplitudeEvent } from "../../../../helpers/analytics";

export const BURN_LIST = [
  { title: "1 hour", value: 15000, hours: 1 },
  { title: "12 hour", value: 150000, hours: 12 },
  { title: "1 day", value: 280000, hours: 24 },
];

const Burn: FC = () => {
  const { socket } = useSocketCtx();
  const { address } = useAccount();
  const { isWallet } = useTrackedState();
  const { chain } = useNetwork();
  const { data: readData, error } = useVerseBalance();
  const [newCookies, setNewCookies] = useState<number>();

  const verseTokenDetails = getVerseTokenDetails(chain?.id);
  const burnEngineDetails = getBurnEngineDetails(chain?.id);

  const [balanceData, setBalanceData] = useState<{
    formatted: string;
    value: bigint;
  }>();

  const {
    data: txData,
    isLoading: isPendingWallet,
    isSuccess: isTxSent,
    writeAsync,
  } = useContractWrite({
    address: verseTokenDetails?.address,
    abi: verseTokenDetails?.abi,
    functionName: "transfer",
    chainId: chain?.id,
  });

  const { isSuccess: isTxConfirmed } = useWaitForTransaction(txData);

  const [showLoading, setShowLoading] = useState(false);

  const [selectedTab, setSelectedTab] = useState(0);
  const selectedBurn = BURN_LIST[selectedTab];

  const insufficientVerse = balanceData?.value
    ? selectedBurn.value > Number(formatEther(balanceData.value))
    : true;

  useEffect(() => {
    if (!readData) return;
    setBalanceData({ value: readData, formatted: formatEther(readData) });
  }, [readData, error]);

  useEffect(() => {
    if (isPendingWallet || isTxSent || isTxConfirmed) {
      setShowLoading(true);

      logAmplitudeEvent({
        name: "verse clicker burn",
        "blockchain address": address || "",
        blockchain: chain?.nativeCurrency.symbol,
        result: selectedBurn.value,
        txId: txData?.hash || "",
      });
    } else {
      setShowLoading(false);
    }
  }, [isPendingWallet, isTxSent, isTxConfirmed]);

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
      if (!burnEngineDetails) return;
      await writeAsync({
        args: [burnEngineDetails.address, parseEther(amount.toString())],
      });
    } catch (error) {
      console.log("Write error", error);
    }
  };

  return (
    <ModalWrapper>
      {showLoading ? (
        <LoadingStates
          isPendingWallet={isPendingWallet}
          isTxSent={isTxSent}
          isTxConfirmed={isTxConfirmed}
          newCookies={newCookies}
          selectedTab={selectedTab}
          txHash={txData?.hash}
        />
      ) : (
        <>
          <H3>Burn VERSE to boost your point production</H3>
          <Container>
            <Label $color="secondary">Boost duration</Label>
            <Tabs
              center
              mobileVersion
              tabs={BURN_LIST.map((button, i) => (
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
                : "0.00"}{" "}
              VERSE
            </Label>
          </Container>
          {insufficientVerse && (
            <WarningChip
              link={
                isWallet
                  ? "bitcoincom://buy/ETH_BLOCKCHAIN-ERC_20_PROTOCOL-0x249cA82617eC3DfB2589c4c17ab7EC9765350a18"
                  : `https://buy.bitcoin.com/verse/`
              }
            >
              You don&#39;t have enough VERSE. Buy now!
            </WarningChip>
          )}

          <StyledButton
            onClick={() => handleBurn(selectedBurn?.value)}
            // disabled={insufficientVerse}
            disabled
          >
            Burn VERSE (coming soon)
          </StyledButton>
          <Footnote>
            <Label $color="secondary">
              This transaction will send the specified VERSE to{" "}
              <Link
                href={getBurnEngineExplorerLink(chain?.id || 1)}
                target="_blank"
                rel="noreferrer"
              >
                this contract
              </Link>
              , making the sent VERSE permanently inaccessible.
            </Label>
          </Footnote>
        </>
      )}
    </ModalWrapper>
  );
};

export default Burn;
