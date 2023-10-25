import React from "react";
import { formatNumber } from "../../../helpers/formatNumber";
import { useTrackedState } from "../../../context/store";
import Star from "../../Icons/Star";
import { Wrapper } from "./styled";

const CookiesDisplay = () => {
  const { player } = useTrackedState();
  return (
    <Wrapper>
      <Star size="1.5rem" /> {formatNumber(player.cookies)}
    </Wrapper>
  );
};

export default CookiesDisplay;
