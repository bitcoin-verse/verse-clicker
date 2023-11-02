import React, { FC, useMemo } from "react";

import { useAccount } from "wagmi";
import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import Trophy from "../../Icons/Trophy";

import { Content, Divider, Subtitle, TrophyWrapper, Wrapper } from "./styled";
import { Label } from "../../Label";

const Stats: FC = () => {
  const { player, leaderboard } = useTrackedState();
  const { address } = useAccount();

  const userRank = useMemo(() => {
    const leaderboardIndex = leaderboard?.findIndex(
      (item) => item.address === address,
    );

    if (leaderboardIndex === undefined || leaderboardIndex >= 10) {
      return ">10";
    }
    return leaderboardIndex + 1;
  }, [leaderboard]);

  return (
    <Wrapper>
      <Content>
        <div>
          <TrophyWrapper>
            <Trophy />
            <Label $color="secondary">You</Label>
          </TrophyWrapper>
          <Subtitle>{userRank}</Subtitle>
        </div>
        <Divider />
        <div>
          <Label $color="secondary">Earned</Label>
          <Subtitle>{formatNumber(player.stats.Earned)}</Subtitle>
        </div>
        <div>
          <Label $color="secondary">Clicked</Label>
          <Subtitle>{formatNumber(player.stats.Clicked)}</Subtitle>
        </div>
        <div>
          <Label $color="secondary">Spent</Label>
          <Subtitle>{formatNumber(player.stats.Spent)}</Subtitle>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Stats;
