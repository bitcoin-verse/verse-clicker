import React, { FC } from "react";

import Sparkle from "./Icons/Sparkle";
import Star from "./Icons/Star";
import { useTrackedState } from "../context/store";
import Present from "./Icons/Present";

interface Props {
  size?: number | string;
}

const PointsIcon: FC<Props> = ({ size }) => {
  const { gameMode } = useTrackedState();

  switch (gameMode) {
    case "Polygon":
      return <Sparkle size={size} />;
    case "Christmas":
      return <Present size={size} />;
    case "Ethereum":
    case "Goerli":
    default:
      return <Star size={size} />;
  }
};

export default PointsIcon;
