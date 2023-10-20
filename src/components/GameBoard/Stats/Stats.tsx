import React, { FC } from "react";

import { useAccount } from "wagmi";
import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import Trophy from "../../Icons/Trophy";
import { Title } from "../../Title";

import { Content, Divider, Subtitle, TrophyWrapper, Wrapper } from "./styled";

const Stats: FC = () => {
  const { player, leaderboard } = useTrackedState();
  const { address } = useAccount();

  const userRank = leaderboard?.findIndex((item) => item.address === address)
    ? leaderboard.findIndex((item) => item.address === address) + 1
    : "🌟";

  return (
    <Wrapper>
      <Content>
        <div>
          <TrophyWrapper>
            <Trophy />
            <Title>You</Title>
          </TrophyWrapper>
          <Subtitle>{userRank}</Subtitle>
        </div>
        <Divider />
        <div>
          <Title>Earned</Title>
          <Subtitle>{formatNumber(player.stats.Earned)}</Subtitle>
        </div>
        <div>
          <Title>Clicked</Title>
          <Subtitle>{formatNumber(player.stats.Clicked)}</Subtitle>
        </div>
        <div>
          <Title>Spent</Title>
          <Subtitle>{formatNumber(player.stats.Spent)}</Subtitle>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Stats;
