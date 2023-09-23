import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";

import BuildingInfo from "./BuildingInfo";
import Register from "./Register";
import UpgradesList from "./UpgradesList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  box-sizing: border-box;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0.125rem solid #086bc6;
  background: #0f518f;

  margin: 0 1rem;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Upgrades: FC = () => {
  const { buildings, currentBuilding } = useTrackedState();
  const building = useMemo(
    () => buildings.find((b) => b.name === currentBuilding),
    [buildings, currentBuilding],
  );

  if (!building) return null;

  return (
    <Wrapper>
      <BuildingInfo building={building} />
      <Register building={building} />
      <UpgradesList upgrades={building.upgrades} building={building} />
    </Wrapper>
  );
};

export default Upgrades;
