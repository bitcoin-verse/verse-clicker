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
  StarWrapper,
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
        if (index >= 10) {
          if (item.address === address) {
            return (
              <Body key={item.address}>
                <div>...</div>
                <div>
                  {truncateEthAddress(item.address)}{" "}
                  {item.address === address && <YouBadge>🌟</YouBadge>}
                </div>
                <div>
                  {formatNumber(Number(item.stats.Clicked))}{" "}
                  <MoonImage src={cookieImg} alt="cookie" />
                </div>
                <div>
                  {formatNumber(Number(item.stats.Earned))}
                  <StarWrapper>
                    <Star size="0.875rem" />
                  </StarWrapper>
                </div>
              </Body>
            );
          }

          return null;
        }

        return (
          <Body key={item.address}>
            <div>{index + 1}</div>
            <div>
              {truncateEthAddress(item.address)}{" "}
              {item.address === address && <YouBadge>🌟</YouBadge>}
            </div>
            <div>
              {formatNumber(Number(item.stats.Clicked))}{" "}
              <MoonImage src={cookieImg} alt="cookie" />
            </div>
            <div>
              {formatNumber(Number(item.stats.Earned))}
              <StarWrapper>
                <Star size="0.875rem" />
              </StarWrapper>
            </div>
          </Body>
        );
      })}
    </LeaderboardWrapper>
  );
};

export default Leaderboard;
