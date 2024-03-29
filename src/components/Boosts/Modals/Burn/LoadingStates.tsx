import React, { FC } from "react";
import { useChainId } from "wagmi";

import { useTrackedState } from "../../../../context/store";
import { formatNumber } from "../../../../helpers/formatNumber";
import { getTxExplorerLink } from "../../../../helpers/getExplorerLink";
import { H3 } from "../../../H3";
import Spinner from "../../../Icons/Spinner";
import { Label } from "../../../Label";
import LinkButton from "../../../LinkButton";
import BurnEngineLink from "../../../Links/BurnEngineLink";
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
  const chainId = useChainId();
  const { player } = useTrackedState();

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
            href={getTxExplorerLink(chainId, hash)}
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
            href={getTxExplorerLink(chainId, hash)}
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
            {formatNumber(BURN_LIST[selectedTab].value)} VERSE contributed to{" "}
            <BurnEngineLink />
          </Label>
          <Label>{BURN_LIST[selectedTab].title} skipped</Label>
          <Label>{formatNumber(newCookies * player.cps)} points added</Label>
          <LinkButton
            href={getTxExplorerLink(chainId, hash)}
            target="_blank"
            rel="noreferrer"
          >
            View on Etherscan
          </LinkButton>
        </>
      )}
    </>
  );
};

export default LoadingStates;
