import React, { Fragment } from "react";
import { useChainId } from "wagmi";

import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { getTxExplorerLink } from "../../helpers/getExplorerLink";
import External from "../Icons/External";
import { BonusHeader, BonusRow } from "./styled";
import { Title } from "../Title";
import { colors } from "../colors";
import verseIcon from "../../assets/verse-icon.png";
import Star from "../Icons/Star";

/* const sample = {
  bonusBurnTxs: [
    {
      date: 1701136345476,
      burnAmount: 10000,
      txHash:
        "0x96c370bd3a32aa3658405b0ff74205ed91870efc1aded99389a90d451f4b5227",
      bonusAmount: 35396640,
    },
    {
      date: 1701136345476,
      burnAmount: 10000,
      txHash:
        "0x96c370bd3a32aa3658405b0ff74205ed91870efc1aded99389a90d451f4b5227",
      bonusAmount: 35396640,
    },
    {
      date: 1701136345476,
      burnAmount: 10000,
      txHash:
        "0x96c370bd3a32aa3658405b0ff74205ed91870efc1aded99389a90d451f4b5227",
      bonusAmount: 35396640,
    },
  ],
}; */

const BurnBonus = () => {
  const { returnData } = useTrackedState();
  const chainId = useChainId();
  return (
    <>
      <hr
        style={{ width: "100%", border: `0.025rem solid ${colors.shade60}` }}
      />
      <Title>Burn Engine Contributions</Title>

      <BonusRow>
        <BonusHeader>Date</BonusHeader>
        <BonusHeader>Points</BonusHeader>
        <BonusHeader>Contributed</BonusHeader>
        <BonusHeader>Tx</BonusHeader>

        {returnData?.bonusBurnTxs.map((bb) => {
          return (
            <Fragment key={bb.txHash}>
              <div>
                {new Date(bb.date).toLocaleDateString("en-US", {
                  dateStyle: "short",
                })}
              </div>
              <div>
                {formatNumber(bb.bonusAmount)} <Star size="0.875rem" />
              </div>
              <div>
                {formatNumber(bb.burnAmount)}
                <img src={verseIcon} alt="Verse Icon" />
              </div>
              <a
                href={getTxExplorerLink(chainId, bb.txHash)}
                target="_blank"
                rel="noreferrer"
              >
                <External size="0.875rem" />
              </a>
            </Fragment>
          );
        })}
      </BonusRow>
    </>
  );
};

export default BurnBonus;
