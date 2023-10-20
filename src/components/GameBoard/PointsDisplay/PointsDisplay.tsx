import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import Star from "../../Icons/Star";
import { Title } from "../../Title";

import { Wrapper, PointsWrapper, Points, StatCount } from "./styled";

const PointsDisplay: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <PointsWrapper>
        <Star />
        <Points>{formatNumber(player.cookies)}</Points>
      </PointsWrapper>
      <StatCount>
        <Title>Per Second</Title> {formatNumber(player.cps)}
      </StatCount>
    </Wrapper>
  );
};

export default PointsDisplay;
