import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import Star from "../../Icons/Star";

import { Wrapper, PointsWrapper, Points, StatCount } from "./styled";
import { Label } from "../../Label";

const PointsDisplay: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <PointsWrapper>
        <Star />
        <Points>{formatNumber(player.cookies)}</Points>
      </PointsWrapper>
      <StatCount>
        {formatNumber(player.cps)}
        <Star size={18} />
        <Label>per second</Label>
      </StatCount>
    </Wrapper>
  );
};

export default PointsDisplay;
