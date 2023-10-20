import React, { FC } from "react";
import styled from "styled-components";

import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";

import Star from "../Icons/Star";
import { Title } from "../Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top: 1rem;
  z-index: 1;
  text-shadow: 2px 2px 4px black;

  @media (min-width: 768px) {
    position: relative;
  }
`;

const PointsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Points = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-shadow: 0px 0.25rem 1.25rem #ffb800;
`;

const StatCount = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const PointsDisplay: FC = () => {
  const { player } = useTrackedState();

  return (
    <Wrapper>
      <PointsWrapper>
        <Star />
        <Points>{formatNumber(player.cookies)}</Points>
      </PointsWrapper>
      <StatCount>
        <Title>Per Second</Title> {formatNumber(player.cps)}
      </StatCount>
    </Wrapper>
  );
};

export default PointsDisplay;
