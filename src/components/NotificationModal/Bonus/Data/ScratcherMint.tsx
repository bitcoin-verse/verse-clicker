import React, { FC, Fragment } from "react";
import PointsIcon from "src/components/PointsIcon";
import { Title } from "src/components/Title";
import { TxData } from "src/context/reducers/returnData";
import { formatNumber } from "src/helpers/formatNumber";
import { getTxExplorerLink } from "src/helpers/getExplorerLink";
import { useChainId } from "wagmi";

import verseIcon from "../../../../assets/verse-icon.png";
import External from "../../../Icons/External";
import { BonusHeader, BonusRow } from "../../styled";

interface Props {
  txData: TxData[];
}

const ScratcherMint: FC<Props> = ({ txData }) => {
  const chainId = useChainId();

  return (
    <>
      <Title>Verse Scratcher Buys</Title>
      <BonusRow>
        <BonusHeader>Date</BonusHeader>
        <BonusHeader>Points</BonusHeader>
        <BonusHeader>Tx</BonusHeader>

        {txData.map((data) => {
          return (
            <Fragment key={data.txHash}>
              <div>
                {new Date(data.date).toLocaleDateString(undefined, {
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

export default ScratcherMint;
