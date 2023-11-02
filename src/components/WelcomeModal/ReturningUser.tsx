import React from "react";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { formatSeconds } from "../../helpers/formatSeconds";

import { Title } from "../Title";
import Clock from "../Icons/Clock";
import Star from "../Icons/Star";
import { H3 } from "../H3";

import { DataWrapper, Stats, Value } from "./styled";

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
            <Star size={28} />
            <H3>{formatNumber(returnData?.cookies)} </H3>
          </Value>
        </Stats>
      </DataWrapper>
    </>
  );
};

export default ReturningUser;
