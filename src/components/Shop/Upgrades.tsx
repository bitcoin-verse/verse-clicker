import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import { Button } from "../Button";
import { formatNumber } from "../../helpers/formatNumber";
import Upgrade from "../../classes/Upgrade";
import BuildingInfo from "./BuildingInfo";
import Register from "./Register";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Upgrades: FC = () => {
  const { buildings, currentBuilding } = useTrackedState();
  const dispatch = useDispatch();
  const building = useMemo(
    () => buildings.find((b) => b.name === currentBuilding),
    [buildings, currentBuilding],
  );

  const buyUpgrade = useCallback(
    (upgrade: Upgrade) => {
      if (!building) return;

      dispatch({
        type: "BUY_UPGRADE",
        payload: {
          buildingName: building.name,
          upgrade,
        },
      });
    },
    [building],
  );

  if (!building) return null;

  return (
    <Wrapper>
      <h3>Upgrades</h3>
      <BuildingInfo building={building} />
      <Register building={building} />
      {building.upgrades.map((upgrade, i) => {
        if (upgrade.owned) return null;
        return (
          <Button key={i} onClick={() => buyUpgrade(upgrade)}>
            {upgrade.name} {formatNumber(upgrade.cost)}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default Upgrades;
