import React, { FC } from "react";

import { useTrackedState } from "../context/store";
import Present from "./Icons/Present";
import Sparkle from "./Icons/Sparkle";
import Star from "./Icons/Star";

interface Props {
  size?: number | string;
}

const PointsIcon: FC<Props> = ({ size }) => {
  const { gameMode } = useTrackedState();

  switch (gameMode) {
    case "Polygon":
    case "LunarNewYear":
      return <Sparkle size={size} />;
    case "Christmas":
      return <Present size={size} />;
    case "Ethereum":
    case "Goerli":
    case "Sepolia":
    default:
      return <Star size={size} />;
  }
};

export default PointsIcon;
