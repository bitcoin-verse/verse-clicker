import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";

const DisplayWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.75rem;

  gap: 0.75rem;
  color: white;
`;

const CookieCount = styled.div`
  flex-basis: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
`;

const StatCount = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
`;
const Title = styled.span`
  color: #8d8d8d;
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
