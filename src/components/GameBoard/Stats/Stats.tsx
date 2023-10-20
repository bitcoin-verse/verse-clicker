import React, { FC } from "react";
import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import Trophy from "../../Icons/Trophy";
import { Title } from "../../Title";

import { Content, Divider, Subtitle, TrophyWrapper, Wrapper } from "./styled";

const Stats: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <Content>
        <div>
          <TrophyWrapper>
            <Trophy />
            <Title>You</Title>
          </TrophyWrapper>
          <Subtitle>{formatNumber(player.stats.Earned)}</Subtitle>
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
