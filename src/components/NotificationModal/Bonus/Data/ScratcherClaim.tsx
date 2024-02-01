import React, { FC, Fragment } from "react";
import PointsIcon from "src/components/PointsIcon";
import { Title } from "src/components/Title";
import { BonusData } from "src/context/reducers/bonusData";
import { TxData } from "src/context/reducers/returnData";
import { formatNumber } from "src/helpers/formatNumber";
import { getTxExplorerLink } from "src/helpers/getExplorerLink";
import { useChainId } from "wagmi";

import verseIcon from "../../../../assets/verse-icon.png";
import External from "../../../Icons/External";
import { BonusHeader, BonusRow } from "../../styled";

interface Props {
  bonusData: TxData[] | BonusData[] | undefined;
}

const ScratcherClaim: FC<Props> = ({ bonusData }) => {
  const chainId = useChainId();

  return (
    <>
      <Title>Verse Scratcher Claims</Title>
      <BonusRow>
        <BonusHeader>Date</BonusHeader>
        <BonusHeader>Claimed</BonusHeader>
        <BonusHeader>Tx</BonusHeader>

        {bonusData?.map((data) => {
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

export default ScratcherClaim;
