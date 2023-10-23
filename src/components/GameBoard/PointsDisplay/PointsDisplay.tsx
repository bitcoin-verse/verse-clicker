import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import Star from "../../Icons/Star";

import { Wrapper, Points, StatCount } from "./styled";
import { Label } from "../../Label";

const PointsDisplay: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <Points>
        <Star size={32} />
        {formatNumber(player.cookies)}
      </Points>
      <StatCount>
        {formatNumber(player.cps)}
        <Star size={16} />
        <Label>per second</Label>
      </StatCount>
    </Wrapper>
  );
};

export default PointsDisplay;
