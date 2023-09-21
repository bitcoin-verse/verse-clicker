import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import { getBuildingsCost } from "../../helpers/buildingHelpers";
import { useAccount } from "wagmi";

const BuyWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: gold;
  font-weight: 600;
  border: 1px solid grey;
  outline: none;
  flex: 1;
  text-align: center;
  border-radius: 0.75rem;
  cursor: pointer;
  color: black;

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
  const {
    player,
    settings: { recalculateCPS },
  } = useTrackedState();
  const { address } = useAccount();
  const [newPurchase, setNewPurchase] = useState(false);

  const buyBuilding = useCallback(
    (qty: number) => {
      dispatch({
        type: "BUY_BUILDING",
        payload: { name: building.name, qty },
      });
      setNewPurchase(true);
    },
    [building],
  );

  useEffect(() => {
    if (newPurchase && address && !recalculateCPS) {
      dispatch({ type: "SAVE_GAME", payload: { address } });
      setNewPurchase(false);
    }
  }, [recalculateCPS, newPurchase]);

  return (
    <>
      <h3>MULTIPLIERS</h3>
      <BuyWrapper>
        <Button
          disabled={player.cookies < getBuildingsCost(1, building.cost)}
          onClick={() => {
            if (player.cookies < getBuildingsCost(1, building.cost)) return;

            buyBuilding(1);
          }}
        >
          1x: {formatNumber(getBuildingsCost(1, building.cost))}
        </Button>
        <Button
          disabled={player.cookies < getBuildingsCost(5, building.cost)}
          onClick={() => {
            if (player.cookies < getBuildingsCost(5, building.cost)) return;

            buyBuilding(5);
          }}
        >
          5x: {formatNumber(getBuildingsCost(5, building.cost))}
        </Button>
        <Button
          disabled={player.cookies < getBuildingsCost(10, building.cost)}
          onClick={() => {
            if (player.cookies < getBuildingsCost(10, building.cost)) return;

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
