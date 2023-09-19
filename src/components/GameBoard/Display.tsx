import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";

const DisplayWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  gap: 16px;
`;

const CookieCount = styled.h2`
  flex-basis: 100%;
  text-align: center;
`;

const StatCount = styled.div`
  font-weight: 600;
`;

const Display: FC = () => {
  const {
    player,
    settings: { frameRate },
  } = useTrackedState();

  return (
    <DisplayWrapper>
      <CookieCount>Cookies: {formatNumber(player.cookies)}</CookieCount>
      <StatCount>CPS: {formatNumber(player.aMPF * frameRate)}</StatCount>
      <StatCount>CPC: {formatNumber(player.aMPC)}</StatCount>
    </DisplayWrapper>
  );
};

export default Display;
