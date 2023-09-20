import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { Button } from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BuyWrapper = styled.div`
  flex-direction: row;
  display: flex;
  gap: 4px;
  justify-content: center;

  button {
    font-size: 12px;
    padding: 8px 0;
    flex-direction: column;
  }
`;

const Upgrades: FC = () => {
  const { buildings, currentBuilding } = useTrackedState();
  const building = buildings.find((b) => b.name === currentBuilding);

  return (
    <Wrapper>
      <h3>Upgrades</h3>
      <div>{currentBuilding}</div>
      <div>You have x {currentBuilding}</div>
      <div>Each {currentBuilding} produces x cookies.</div>
      <div>All of your {currentBuilding} combines produces x cookies.</div>
      <BuyWrapper>
        <Button>
          <div>Buy x1</div>
          <div> 15.0</div>
        </Button>
        <Button>
          <div>Buy x5</div>
          <div> 101.0</div>
        </Button>
        <Button>
          <div>Buy x10</div>
          <div> 305.0</div>
        </Button>
      </BuyWrapper>
      {building?.upgrades.map((upgrade, i) => (
        <Button key={i}>{upgrade.name}</Button>
      ))}
    </Wrapper>
  );
};

export default Upgrades;
