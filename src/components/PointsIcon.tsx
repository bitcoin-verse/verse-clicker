import React, { FC } from "react";

import { useTrackedState } from "../context/store";
import Sparkle from "./Icons/Sparkle";
import Star from "./Icons/Star";

interface Props {
  size?: number | string;
}

const PointsIcon: FC<Props> = ({ size }) => {
  const { gameMode } = useTrackedState();

  switch (gameMode) {
    case "Polygon":
      return <Sparkle size={size} />;
    case "Ethereum":
    case "Sepolia":
    default:
      return <Star size={size} />;
  }
};

export default PointsIcon;
