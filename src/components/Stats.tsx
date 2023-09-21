import React, { FC } from "react";
import { useTrackedState } from "../context/store";
import { formatNumber } from "../helpers/formatNumber";
import { Title } from "./Title";

const Stats: FC = () => {
  const { player } = useTrackedState();
  return (
    <div style={{ flex: 0, paddingBottom: 32 }}>
      <h3>Lifetime Totals</h3>
      <ul style={{ marginLeft: 16 }}>
        <li>
          <Title>Earned: </Title>
          {formatNumber(player.cookieStats.Earned)}
        </li>
        <li>
          <Title>Clicked: </Title>
          {formatNumber(player.cookieStats.Clicked)}
        </li>
        <li>
          <Title>Spent: </Title>
          {formatNumber(player.cookieStats.Spent)}
        </li>
      </ul>
    </div>
  );
};

export default Stats;
