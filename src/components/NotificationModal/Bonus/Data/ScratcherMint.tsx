import React, { FC, Fragment } from "react";
import { Title } from "src/components/Title";
import { BonusData } from "src/context/reducers/bonusData";
import { TxData } from "src/context/reducers/returnData";
import { getTxExplorerLink } from "src/helpers/getExplorerLink";
import { useChainId } from "wagmi";

import External from "../../../Icons/External";
import { BonusHeader, BonusRow } from "../../styled";

interface Props {
  bonusData: TxData[] | BonusData[] | undefined;
}

const ScratcherMint: FC<Props> = ({ bonusData }) => {
  const chainId = useChainId();

  return (
    <>
      <Title>Verse Scratcher Buys</Title>
      <BonusRow>
        <BonusHeader>Date</BonusHeader>
        <BonusHeader>Points</BonusHeader>
        <BonusHeader></BonusHeader>
        <BonusHeader>Tx</BonusHeader>

        {bonusData?.map((data) => {
          return (
            <Fragment key={data.txHash}>
              <div>
                {new Date(data.date).toLocaleDateString(undefined, {
                  dateStyle: "short",
                })}
              </div>
              <div style={{ gridColumn: "2/4" }}>
                +{data.bonusBase * 100}% production added
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
