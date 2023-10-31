import React, { FC } from "react";
import { Label } from "../../../Label";
import Spinner from "../../../Icons/Spinner";
import { LinkButton } from "../../../LinkButton";
import { H3 } from "../../../H3";
import { formatNumber } from "../../../../helpers/formatNumber";
import { BURN_LIST } from "./Burn";

interface Props {
  isPendingWallet: boolean;
  isTxSent: boolean;
  isTxConfirmed: boolean;
  selectedTab: number;
  txHash?: string;
  newCookies?: number;
}

const LoadingStates: FC<Props> = ({
  isPendingWallet,
  isTxSent,
  isTxConfirmed,
  selectedTab,
  txHash: hash,
  newCookies,
}) => {
  return (
    <>
      {isPendingWallet && (
        <>
          <Label>Pending transaction, check your wallet.</Label>
          <Spinner />
        </>
      )}
      {isTxSent && !isTxConfirmed && (
        <>
          <Label>Transaction accepted, waiting for confirmation.</Label>
          <Spinner />
          <LinkButton
            href={`https://goerli.etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Etherscan
          </LinkButton>
        </>
      )}
      {isTxConfirmed && !newCookies && (
        <>
          <Label>Transaction confirmed, calculating bonus</Label>
          <Spinner />
          <LinkButton
            href={`https://goerli.etherscan.io/tx/${hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Etherscan
          </LinkButton>
        </>
      )}
      {isTxConfirmed && newCookies && (
        <>
          <H3>Bonus Awarded!</H3>
          <Label>
            {BURN_LIST[selectedTab].value.toLocaleString()} VERSE burned
          </Label>
          <Label>{BURN_LIST[selectedTab].title} skipped</Label>
          <Label>{formatNumber(newCookies)} points added</Label>
        </>
      )}
    </>
  );
};

export default LoadingStates;
