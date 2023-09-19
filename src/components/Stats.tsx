import React, { FC } from "react";
import { useTrackedState } from "../context/store";
import { formatNumber } from "../helpers/formatNumber";

const Stats: FC = () => {
  const { player } = useTrackedState();
  return (
    <div style={{ flex: 0, paddingBottom: 32 }}>
      <h3>Lifetime Totals</h3>
      <ul style={{ marginLeft: 16 }}>
        <li>Earned: {formatNumber(player.cookieStats.Earned)}</li>
        <li>Clicked: {formatNumber(player.cookieStats.Clicked)}</li>
        <li>Spent: {formatNumber(player.cookieStats.Spent)}</li>
      </ul>
    </div>
  );
};

export default Stats;
