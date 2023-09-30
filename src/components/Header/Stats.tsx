import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../contextNew/store";
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
  const { playerData } = useTrackedState();

  return (
    <Wrapper>
      <div>
        <Title>Earned: </Title>
        {formatNumber(playerData?.stats.Earned)}
      </div>
      <div>
        <Title>Clicked: </Title>
        {formatNumber(playerData?.stats.Clicked)}
      </div>
      <div>
        <Title>Spent: </Title>
        {formatNumber(playerData?.stats.Spent)}
      </div>
    </Wrapper>
  );
};

export default Stats;
