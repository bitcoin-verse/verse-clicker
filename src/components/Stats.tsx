import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../context/store";
import { formatNumber } from "../helpers/formatNumber";
import { Title } from "./Title";

const Wrapper = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: space-between;
  gap: 1rem;
  font-weight: 500;
`;

const Stats: FC = () => {
  const { player } = useTrackedState();
  return (
    <Wrapper>
      <div>
        <Title>Earned: </Title>
        {formatNumber(player.cookieStats.Earned)}
      </div>
      <div>
        <Title>Clicked: </Title>
        {formatNumber(player.cookieStats.Clicked)}
      </div>
      <div>
        <Title>Spent: </Title>
        {formatNumber(player.cookieStats.Spent)}
      </div>
    </Wrapper>
  );
};

export default Stats;
