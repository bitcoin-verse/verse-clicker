import React, { FC, useState } from "react";

import PointsDisplay from "./PointsDisplay/PointsDisplay";
import Cookie from "./Cookie";
import styled from "styled-components";
import Tabs, { TabButton } from "./Tabs";
import Advertisement from "../Advertisement";
import Bonuses from "../Bonuses/Bonuses";
import Stats from "./Stats/Stats";

import ShopList from "../Shop/ShopList";
import UpgradesList from "../Shop/UpgradesList";
import PurchaseAmount from "./PurchaseAmount";

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
  padding: 1rem 0;
  gap: 1rem;
`;

const MainSection = styled.div`
  margin-top: 1rem;
  align-self: start;

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const GameBoard: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <StyledGameBoard>
      <MainSection>
        <Bonuses />
        <Stats />
        <PointsDisplay />
        <Cookie />
        <Advertisement />
      </MainSection>
      <ShopSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Tabs
            tabs={[
              <TabButton
                key="buildings"
                $isSelected={selectedTab === 0}
                type="button"
                onClick={() => setSelectedTab(0)}
              >
                Buildings
              </TabButton>,
              <TabButton
                key="upgrades"
                $isSelected={selectedTab === 1}
                type="button"
                onClick={() => setSelectedTab(1)}
              >
                Upgrades
              </TabButton>,
            ]}
          />

          {selectedTab === 0 && <PurchaseAmount />}
        </div>

        <TabContent>
          {selectedTab === 0 ? <ShopList /> : <UpgradesList />}
        </TabContent>
        <Advertisement />
      </ShopSection>
    </StyledGameBoard>
  );
};

export default GameBoard;
