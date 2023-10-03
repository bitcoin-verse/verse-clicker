import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import { getBuildingsCost } from "../../helpers/buildingHelpers";
import { useSocketCtx } from "../../context/SocketContext";

const BuyWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  font-weight: 600;
  outline: none;

  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 1rem;
  background: #163756;
  color: white;

  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

interface Props {
  building: Building;
  index: number;
}

const Register: FC<Props> = ({ building, index }) => {
  const { socket } = useSocketCtx();
  const { player } = useTrackedState();

  const buyBuilding = useCallback(
    (amount: number) => {
      socket.emit("buy_building", { index, amount });
    },
    [building, index],
  );

  return (
    <BuyWrapper>
      <Button
        disabled={player.cookies < getBuildingsCost(1, building.cost)}
        onClick={() => {
          if (player.cookies < getBuildingsCost(1, building.cost)) return;

          buyBuilding(1);
        }}
      >
        <div>1x</div>
        <div>{formatNumber(getBuildingsCost(1, building.cost))}</div>
      </Button>
      <Button
        disabled={player.cookies < getBuildingsCost(5, building.cost)}
        onClick={() => {
          if (player.cookies < getBuildingsCost(5, building.cost)) return;

          buyBuilding(5);
        }}
      >
        <div>5x</div>
        <div>{formatNumber(getBuildingsCost(5, building.cost))}</div>
      </Button>
      <Button
        disabled={player.cookies < getBuildingsCost(10, building.cost)}
        onClick={() => {
          if (player.cookies < getBuildingsCost(10, building.cost)) return;

          buyBuilding(10);
        }}
      >
        <div>10x</div>
        <div>{formatNumber(getBuildingsCost(10, building.cost))}</div>
      </Button>
    </BuyWrapper>
  );
};

export default Register;
