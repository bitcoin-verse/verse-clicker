import React, { FC } from "react";
import { useChainId } from "wagmi";

import Sparkle from "./Icons/Sparkle";
import Star from "./Icons/Star";

interface Props {
  size?: number | string;
}

const PointsIcon: FC<Props> = ({ size }) => {
  const chainId = useChainId();

  switch (chainId) {
    case 137:
      return <Sparkle size={size} />;

    case 1:
    case 5:
    default:
      return <Star size={size} />;
  }
};

export default PointsIcon;
