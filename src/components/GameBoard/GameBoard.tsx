import React, { FC, useState } from "react";
import Shop from "../Shop/Shop";

import Display from "./Display";
import Cookie from "./Cookie";
import styled from "styled-components";
import Leaderboard from "../Leaderboard";
import Tabs from "../Tabs";

const StyledGameBoard = styled.section`
  position: relative;
  flex: 1;
  display: grid;

  align-items: center;

  width: 100%;
  max-width: 80rem;
  margin: auto;
  padding: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: 70% 30%;
  }
`;

const ShopSection = styled.div`
  align-self: start;
`;

const GameBoard: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <StyledGameBoard>
      <div>
        <Display />
        <Cookie />
      </div>
      <ShopSection>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === 0 ? <Shop /> : <Leaderboard />}
      </ShopSection>
    </StyledGameBoard>
  );
};

export default GameBoard;
