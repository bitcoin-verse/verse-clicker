import React from "react";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { formatSeconds } from "../../helpers/formatSeconds";

import { Title } from "../Title";
import Clock from "../Icons/Clock";
import { H3 } from "../H3";

import { DataWrapper, Stats, Value } from "./styled";
import BonusList from "./BonusList";
import PointsIcon from "../PointsIcon";

const ReturningUser = () => {
  const { returnData } = useTrackedState();

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
            <PointsIcon size={28} />
            <H3>{formatNumber(returnData?.cookies)} </H3>
          </Value>
        </Stats>
      </DataWrapper>

      {returnData?.bonus.burn && returnData.bonus.burn.length > 0 && (
        <BonusList isBurn txData={returnData.bonus.burn} />
      )}
      {returnData?.bonus.scratcher && returnData.bonus.scratcher.length > 0 && (
        <BonusList txData={returnData.bonus.scratcher} />
      )}
    </>
  );
};

export default ReturningUser;
