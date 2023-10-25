import React from "react";

import { useTrackedState } from "../../../context/store";
import { useAccount } from "wagmi";
import truncateEthAddress from "../../../helpers/truncateEthAddress";
import { formatNumber } from "../../../helpers/formatNumber";
import {
  Body,
  Header,
  LeaderboardWrapper,
  MoonImage,
  YouBadge,
} from "./styled";

import cookieImg from "../../../assets/verse-moon-small.png";
import Star from "../../Icons/Star";

const Leaderboard = () => {
  const { address } = useAccount();
  const { leaderboard } = useTrackedState();

  return (
    <LeaderboardWrapper>
      <Header>
        <div></div>
        <div>Address</div>
        <div>Clicks</div>
        <div>Earned</div>
      </Header>

      {leaderboard?.map((item, index) => {
        return (
          <Body key={item.address}>
            <div>{index + 1}</div>
            <div>
              {truncateEthAddress(item.address)}{" "}
              {item.address === address && <YouBadge>You</YouBadge>}
            </div>
            <div>
              {formatNumber(Number(item.stats.Clicked))}{" "}
              <MoonImage src={cookieImg} alt="cookie" />
            </div>
            <div>
              {formatNumber(Number(item.stats.Earned))} <Star size="0.875rem" />
            </div>
          </Body>
        );
      })}
    </LeaderboardWrapper>
  );
};

export default Leaderboard;
