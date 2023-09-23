import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import { getBuildingsCost } from "../../helpers/buildingHelpers";
import cookie from "../../assets/verse-cookie.png";

const BuyWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 1rem;
  background: gold;
  font-weight: 600;
  outline: none;

  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 1rem;
  background: #163756;
  color: white;

  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;

const VerseCookie = styled.img`
  height: 1rem;
  width: 1rem;
  margin: 0 0 0 1rem;
`;

interface Props {
  building: Building;
}

const Register: FC<Props> = ({ building }) => {
  const dispatch = useDispatch();
  const { player } = useTrackedState();

  const buyBuilding = useCallback(
    (qty: number) => {
      dispatch({
        type: "BUY_BUILDING",
        payload: { name: building.name, qty },
      });
    },
    [building],
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
        <VerseCookie src={cookie} />
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
        <VerseCookie src={cookie} />
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
        <VerseCookie src={cookie} />
        <div>{formatNumber(getBuildingsCost(10, building.cost))}</div>
      </Button>
    </BuyWrapper>
  );
};

export default Register;
