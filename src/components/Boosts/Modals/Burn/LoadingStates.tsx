import React, { FC } from "react";
import { Label } from "../../../Label";
import Spinner from "../../../Icons/Spinner";
import { LinkButton } from "../../../LinkButton";
import { H3 } from "../../../H3";
import { formatNumber } from "../../../../helpers/formatNumber";
import { BURN_LIST } from "./Burn";
import { getTxExplorerLink } from "../../../../helpers/getExplorerLink";
import { useChainId } from "wagmi";
import { Link } from "../../../Link";
import { useTrackedState } from "../../../../context/store";

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
  const { isWallet } = useTrackedState();

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
            <Link
              href={`https://verse.bitcoin.com/burn/${
                isWallet ? "?origin=wallet" : ""
              }`}
              target={isWallet ? "_self" : "_blank"}
              rel="noreferrer"
            >
              Burn Engine
            </Link>
          </Label>
          <Label>{BURN_LIST[selectedTab].title} skipped</Label>
          <Label>{formatNumber(newCookies)} points added</Label>
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
