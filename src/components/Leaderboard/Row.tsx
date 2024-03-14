import React, { FC } from "react";

import smallCookieSrc from "../../assets/small-cookie.png";
import { formatNumber } from "../../helpers/formatNumber";
import useUsername from "../../hooks/useUsername";
import Cursor from "../Icons/Cursor";
import Marquee from "../Marquee";
import PointsIcon from "../PointsIcon";
import { Body, StarWrapper, YouBadge } from "./styled";

interface Props {
  address: string;
  isUser: boolean;
  index: string | number;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}

const Row: FC<Props> = ({ address, isUser, index, stats: item }) => {
  const userName = useUsername(address);

  return (
    <Body key={address}>
      <div>{index}</div>

      <Marquee shouldAnimate key={userName}>
        <div>{userName}</div>
      </Marquee>

      <div>
        <img src={smallCookieSrc} width={32} height={32} />
        {formatNumber(Number(item.Earned))}
      </div>
      <div>{formatNumber(Number(item.Clicked))}</div>

      {isUser && (
        <>
          <YouBadge>🌟</YouBadge>
        </>
      )}
    </Body>
  );
};

export default Row;
