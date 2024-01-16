import React, { FC, Fragment } from "react";
import { useChainId } from "wagmi";

import verseIcon from "../../assets/verse-icon.png";
import { TxData } from "../../context/reducers/returnData";
import { formatNumber } from "../../helpers/formatNumber";
import { getTxExplorerLink } from "../../helpers/getExplorerLink";
import External from "../Icons/External";
import PointsIcon from "../PointsIcon";
import { Title } from "../Title";
import { colors } from "../colors";
import { BonusHeader, BonusRow } from "./styled";

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

interface Props {
  txData: TxData[];
  bonusType: "burn" | "scratcher-claim" | "scratcher-mint";
}

const BonusList: FC<Props> = ({ txData, bonusType }) => {
  const chainId = useChainId();

  return (
    <>
      <hr
        style={{ width: "100%", border: `0.025rem solid ${colors.shade60}` }}
      />
      {bonusType === "burn" && <Title>Burn Engine Contributions</Title>}
      {bonusType === "scratcher-claim" && <Title>Verse Scratcher Claims</Title>}
      {bonusType === "scratcher-mint" && <Title>Verse Scratcher Buys</Title>}

      <BonusRow>
        <BonusHeader>Date</BonusHeader>
        <BonusHeader>
          {bonusType === "scratcher-mint" ? "" : "Points"}
        </BonusHeader>
        <BonusHeader>
          {bonusType === "burn" && "Contributed"}
          {bonusType === "scratcher-claim" && "Claimed"}
        </BonusHeader>
        <BonusHeader>Tx</BonusHeader>

        {txData.map((data) => {
          return (
            <Fragment key={data.txHash}>
              <div>
                {new Date(data.date).toLocaleDateString("en-US", {
                  dateStyle: "short",
                })}
              </div>
              <div>
                {formatNumber(data.bonusBase)} <PointsIcon size="0.875rem" />
              </div>
              <div>
                {formatNumber(data.bonusTotal)}
                <img src={verseIcon} alt="Verse Icon" />
              </div>
              <a
                href={getTxExplorerLink(chainId, data.txHash)}
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

export default BonusList;
