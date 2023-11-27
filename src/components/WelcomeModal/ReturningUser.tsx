import React from "react";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { formatSeconds } from "../../helpers/formatSeconds";

import { Title } from "../Title";
import Clock from "../Icons/Clock";
import Star from "../Icons/Star";
import { H3 } from "../H3";

import { DataWrapper, Stats, Value } from "./styled";
import truncateEthAddress from "../../helpers/truncateEthAddress";
import { getTxExplorerLink } from "../../helpers/getExplorerLink";
import { useChainId } from "wagmi";
import Info from "../Icons/Info";

const ReturningUser = () => {
  const { returnData } = useTrackedState();
  const chainId = useChainId();

  return (
    <>
      <h1>Welcome Back!</h1>
      <DataWrapper>
        <Stats>
          <Title $secondary>You were away for</Title>
          <Value>
            <Clock />
            {returnData && <H3>{formatSeconds(returnData.seconds)}</H3>}
          </Value>
        </Stats>

        <Stats>
          <Title $secondary>You earned </Title>
          <Value>
            <Star size={28} />
            <H3>{formatNumber(returnData?.cookies)} </H3>
          </Value>
        </Stats>
      </DataWrapper>

      <>
        <Title>Burn Bonuses</Title>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Date</div>
            <div>Points</div>
            <div>Burned</div>
            <div>Tx</div>
          </div>
          {returnData?.bonusBurnTxs.map((bb) => {
            return (
              <div
                key={bb.txHash}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  {new Date(bb.date).toLocaleDateString("en-US", {
                    dateStyle: "short",
                  })}
                </div>
                <div>{formatNumber(bb.bonusAmount)}</div>
                <div>{bb.burnAmount}</div>
                <a
                  href={getTxExplorerLink(chainId, bb.txHash)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Info />
                </a>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
};

export default ReturningUser;
