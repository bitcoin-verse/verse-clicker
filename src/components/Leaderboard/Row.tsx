import React, { FC } from "react";
import styled from "styled-components";

import VerseMoon from "../../components/Icons/VerseMoon";
import { formatNumber } from "../../helpers/formatNumber";
import useUsername from "../../hooks/useUsername";
import Marquee from "../Marquee";
import { Body, YouBadge } from "./styled";

interface Props {
  address: string;
  isUser: boolean;
  index: string | number;
  stats: {
    Earned: number;
    Clicked: number;
    Spent: number;
  };
}

const Earned = styled.div`
  display: flex;
  & > :nth-child(1) {
    min-width: 1.9rem;
    max-width: 2rem;
    width: 2rem;
  }
`;

const Row: FC<Props> = ({ address, isUser, index, stats: item }) => {
  const userName = useUsername(address);

  return (
    <Body key={address}>
      <div>{index}</div>

      <Marquee shouldAnimate key={userName}>
        <div>{userName}</div>
      </Marquee>

      <Earned>
        <VerseMoon width={"100%"} height={"100%"} />
        {formatNumber(Number(item.Earned))}
      </Earned>
      <div>{formatNumber(Number(item.Clicked))}</div>

      {isUser && (
        <>
          <YouBadge>You</YouBadge>
        </>
      )}
    </Body>
  );
};

export default Row;
