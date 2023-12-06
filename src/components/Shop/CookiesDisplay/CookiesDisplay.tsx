import React from "react";
import { formatNumber } from "../../../helpers/formatNumber";
import { useTrackedState } from "../../../context/store";
import PointsIcon from "../../PointsIcon";
import { Wrapper } from "./styled";

const CookiesDisplay = () => {
  const { player } = useTrackedState();
  return (
    <Wrapper>
      <PointsIcon size="1.5rem" /> {formatNumber(player.cookies)}
    </Wrapper>
  );
};

export default CookiesDisplay;
