import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import { getBuildingsCost } from "../../helpers/buildingHelpers";

const BuyWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;

const Button = styled.button`
  padding: 1rem;
  background: gold;
  font-weight: 600;
  border: 1px solid grey;
  outline: none;
  flex: 1;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background: lightgrey;
  }
`;

interface Props {
  building: Building;
}

const Register: FC<Props> = ({ building }) => {
  const dispatch = useDispatch();
  const { player } = useTrackedState();

  const buyBuilding = useCallback(
    (qty: number) => {
      if (!building) return;
      if (player.cookies < getBuildingsCost(qty, building.cost)) return;

      dispatch({
        type: "BUY_BUILDING",
        payload: { name: building.name, qty },
      });
    },
    [building],
  );

  return (
    <>
      <div>Buy {building.name}</div>
      <BuyWrapper>
        <Button
          disabled={player.cookies < getBuildingsCost(1, building.cost)}
          onClick={() => {
            buyBuilding(1);
          }}
        >
          1x: {formatNumber(getBuildingsCost(1, building.cost))}
        </Button>
        <Button
          disabled={player.cookies < getBuildingsCost(5, building.cost)}
          onClick={() => {
            buyBuilding(5);
          }}
        >
          5x: {formatNumber(getBuildingsCost(5, building.cost))}
        </Button>
        <Button
          disabled={player.cookies < getBuildingsCost(10, building.cost)}
          onClick={() => {
            buyBuilding(10);
          }}
        >
          10x: {formatNumber(getBuildingsCost(10, building.cost))}
        </Button>
      </BuyWrapper>
    </>
  );
};

export default Register;
