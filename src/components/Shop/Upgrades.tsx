import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { Button } from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Upgrades: FC = () => {
  const { buildings, currentBuilding } = useTrackedState();
  const building = buildings.find((b) => b.name === currentBuilding);

  return (
    <Wrapper>
      <h3>Upgrades</h3>
      {building?.upgrades.map((upgrade, i) => (
        <Button key={i}>{upgrade.name}</Button>
      ))}
    </Wrapper>
  );
};

export default Upgrades;
