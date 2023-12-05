import React from "react";
import { useChainId } from "wagmi";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { getTxExplorerLink } from "../../helpers/getExplorerLink";
import { H3 } from "../H3";
import Star from "../Icons/Star";
import { Label } from "../Label";
import { LinkButton } from "../LinkButton";
import BurnEngineLink from "../Links/BurnEngineLink";
import ScratcherLink from "../Links/ScratcherLink";
import verseIcon from "../../assets/verse-icon.png";
import { Value } from "./styled";

const BonusContent = () => {
  const chainId = useChainId();
  const { bonusData } = useTrackedState();
  const isBurn = bonusData?.bonusType === "burn";

  return (
    <>
      {isBurn ? (
        <>
          <H3>Burn Bonus</H3>
          <Label $color="secondary">
            VERSE contributed to <BurnEngineLink />
          </Label>
          <Value>
            {formatNumber(bonusData?.bonusBase)}{" "}
            <img src={verseIcon} height={20} width={20} />
          </Value>
        </>
      ) : (
        <>
          <H3>Scratcher Bonus</H3>
          <Label $color="secondary">
            VERSE claimed in <ScratcherLink />
          </Label>
          <Value>
            {formatNumber(bonusData?.bonusBase)}{" "}
            <img src={verseIcon} height={20} width={20} />
          </Value>
        </>
      )}
      <Label $color="secondary">Points received</Label>
      <Value>
        {formatNumber(bonusData?.bonusTotal)} <Star size={16} />
      </Value>
      <LinkButton
        href={getTxExplorerLink(chainId, bonusData?.txHash)}
        target="_blank"
        rel="noreferrer"
      >
        View on Etherscan
      </LinkButton>
    </>
  );
};

export default BonusContent;
