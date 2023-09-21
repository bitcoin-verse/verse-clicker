import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";

import BuildingInfo from "./BuildingInfo";
import Register from "./Register";
import UpgradesList from "./UpgradesList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      <h3>Upgrades</h3>
      <BuildingInfo building={building} />
      <Register building={building} />
      <UpgradesList upgrades={building.upgrades} buildingName={building.name} />
    </Wrapper>
  );
};

export default Upgrades;
