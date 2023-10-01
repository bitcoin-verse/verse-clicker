import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { Title } from "../Title";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  gap: 1rem;
  font-weight: 500;
  grid-area: stats;
`;

const Stats: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <div>
        <Title>Earned: </Title>
        {formatNumber(player.stats.Earned)}
      </div>
      <div>
        <Title>Clicked: </Title>
        {formatNumber(player.stats.Clicked)}
      </div>
      <div>
        <Title>Spent: </Title>
        {formatNumber(player.stats.Spent)}
      </div>
    </Wrapper>
  );
};

export default Stats;
