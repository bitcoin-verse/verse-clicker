import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import { Button } from "../Button";
import { getBuildingsCost } from "../../context/reducers/building";
import { formatNumber } from "../../helpers/formatNumber";
import Upgrade from "../../classes/Upgrade";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  const dispatch = useDispatch();
  const building = useMemo(
    () => buildings.find((b) => b.name === currentBuilding),
    [buildings, currentBuilding],
  );

  const buyBuilding = useCallback(
    (qty: number) => {
      if (!building) return;

      dispatch({
        type: "BUY_BUILDING",
        payload: { name: building.name, qty },
      });
    },
    [building],
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
      <div>{currentBuilding}</div>
      <div>
        You have {building.amount} {currentBuilding}
      </div>
      <div>
        Each {currentBuilding} produces{" "}
        {formatNumber(building.multiplier * building.amount)} cookies.
      </div>
      <div>
        All of your {currentBuilding} combines produces{" "}
        {formatNumber(building.amount * building.multiplier)} cookies.
      </div>
      <BuyWrapper>
        <Button
          onClick={() => {
            buyBuilding(1);
          }}
        >
          <div>Buy x1</div>
          <div>{formatNumber(getBuildingsCost(1, building.cost))}</div>
        </Button>
        <Button
          onClick={() => {
            buyBuilding(5);
          }}
        >
          <div>Buy x5</div>
          <div>{formatNumber(getBuildingsCost(5, building.cost))}</div>
        </Button>
        <Button
          onClick={() => {
            buyBuilding(10);
          }}
        >
          <div>Buy x10</div>
          <div>{formatNumber(getBuildingsCost(10, building.cost))}</div>
        </Button>
      </BuyWrapper>
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
