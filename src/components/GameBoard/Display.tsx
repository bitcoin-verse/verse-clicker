import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { Title } from "../Title";

const DisplayWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
  z-index: 1;
  text-shadow: 2px 2px 4px black;

  @media (min-width: 768px) {
    position: relative;
  }
`;

const CookieCount = styled.div`
  flex-basis: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const StatCount = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
`;

const Display: FC = () => {
  const {
    player,
    settings: { frameRate },
  } = useTrackedState();

  return (
    <DisplayWrapper>
      <CookieCount>Cookies: {formatNumber(player.cookies)}</CookieCount>
      <StatCount>
        <Title>CPS:</Title> {formatNumber(player.aMPF * frameRate)}
      </StatCount>
      <StatCount>
        <Title>CPC:</Title> {formatNumber(player.aMPC)}
      </StatCount>
    </DisplayWrapper>
  );
};

export default Display;
