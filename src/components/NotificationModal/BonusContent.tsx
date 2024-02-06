import React from "react";
import { useChainId } from "wagmi";

import verseIcon from "../../assets/verse-icon.png";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { getTxExplorerLink } from "../../helpers/getExplorerLink";
import { H3 } from "../H3";
import { Label } from "../Label";
import LinkButton from "../LinkButton";
import BurnEngineLink from "../Links/BurnEngineLink";
import ScratcherLink from "../Links/ScratcherLink";
import PointsIcon from "../PointsIcon";
import { Value } from "./styled";

const BonusContent = () => {
  const chainId = useChainId();
  const { bonusData } = useTrackedState();
  const isBurn = bonusData?.bonusType === "burn";

  return (
    <>
      {bonusData?.bonusType === "burn" && (
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
      )}

      {bonusData?.bonusType === "scratcher" && (
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

      {bonusData?.bonusType === "scratcher-mint" && (
        <>
          <H3>Scratcher Bonus</H3>
          <Label $color="secondary">
            Scratcher Minted! <ScratcherLink />
          </Label>
          <Value>Bonus {bonusData?.bonusBase * 100}% production added</Value>
        </>
      )}
      {bonusData?.bonusType !== "scratcher-mint" && (
        <>
          <Label $color="secondary">Points received</Label>
          <Value>
            {formatNumber(bonusData?.bonusTotal)} <PointsIcon size={16} />
          </Value>
        </>
      )}
      <LinkButton href={getTxExplorerLink(chainId, bonusData?.txHash)} newTab>
        View on {isBurn ? "Etherscan" : "Polyscan"}
      </LinkButton>
    </>
  );
};

export default BonusContent;
