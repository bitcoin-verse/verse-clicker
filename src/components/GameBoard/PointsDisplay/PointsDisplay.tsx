import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import { Label } from "../../Label";
import PointsIcon from "../../PointsIcon";
import { Wrapper, Points, StatCount } from "./styled";

const PointsDisplay: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <Points>
        <PointsIcon size={32} />
        {formatNumber(player.cookies)}
      </Points>
      <StatCount>
        {formatNumber(player.cps)}
        <PointsIcon size={16} />
        <Label>per second</Label>
      </StatCount>
    </Wrapper>
  );
};

export default PointsDisplay;
