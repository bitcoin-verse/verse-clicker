import React, { FC, useMemo } from "react";
import { useAccount } from "wagmi";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import Trophy from "../../Icons/Trophy";
import { Label } from "../../Label";
import { Content, Divider, Subtitle, TrophyWrapper, Wrapper } from "./styled";

const Stats: FC = () => {
  const { player, leaderboardAddresses } = useTrackedState();
  const { address } = useAccount();

  const userRank = useMemo(() => {
    const leaderboardIndex = leaderboardAddresses?.findIndex(
      (item) => item === address,
    );

    if (leaderboardIndex === undefined || leaderboardIndex >= 25) {
      return ">25";
    }
    return leaderboardIndex + 1;
  }, [leaderboardAddresses]);

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
          <Subtitle>{formatNumber(player.stats.Clicked, 0)}</Subtitle>
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
