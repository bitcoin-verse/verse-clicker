import React, { FC, useState } from "react";
import Shop from "../Shop/Shop";

import Display from "./Display";
import Cookie from "./Cookie";
import styled from "styled-components";
import Leaderboard from "../Leaderboard";
import Tabs from "../Tabs";
import Advertisement from "../Advertisement";

const StyledGameBoard = styled.section`
  position: relative;
  flex: 1;
  display: grid;

  align-items: center;

  width: 100%;
  max-width: 80rem;
  margin: auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    grid-template-columns: 60% 40%;
  }
`;

const ShopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

const TabContent = styled.div`
  margin-top: 1rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;

  @media (min-width: 768px) {
    padding: 1rem;
    background: #163756;
  }
`;

const MainSection = styled.div`
  margin-top: 1rem;
`;

const GameBoard: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <StyledGameBoard>
      <MainSection>
        <Display />
        <Cookie />
      </MainSection>
      <ShopSection>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <TabContent>
          {selectedTab === 0 ? <Shop /> : <Leaderboard />}
        </TabContent>
        <Advertisement />
      </ShopSection>
    </StyledGameBoard>
  );
};

export default GameBoard;
