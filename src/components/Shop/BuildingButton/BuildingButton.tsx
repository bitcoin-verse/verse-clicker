import React, { FC, useCallback } from "react";
import { formatNumber } from "../../../helpers/formatNumber";
import { Amount, Button, Content, Cost, Image } from "./styled";
import { useTrackedState } from "../../../context/store";
import { Title } from "../../Title";
import { Text } from "../../Text";
import Star from "../../Icons/Star";
import Building from "../../../classes/Building";
import { useProduction } from "../../../hooks/useProduction";
import placeholder from "../../../assets/placeholder.png";
import { useSocketCtx } from "../../../context/SocketContext";

interface Props {
  building: Building;
  index: number;
}

export const BuildingButton: FC<Props> = ({ building, index }) => {
  const { player } = useTrackedState();
  const { socket } = useSocketCtx();
  const [production] = useProduction(building);

  const buyBuilding = useCallback(
    (amount: number) => {
      socket.emit("buy_building", { index, amount });
    },
    [building, index],
  );

  return (
    <Button
      disabled={building.locked}
      $unaffordable={player.cookies < building.cost}
      onClick={() => {
        buyBuilding(1);
      }}
    >
      <Amount>{building.amount}</Amount>
      <Image
        src={
          building.locked
            ? placeholder
            : `${process.env.PUBLIC_URL}/buildings/${building.image}`
        }
        alt={building.name}
      />
      <Content>
        <Title>{building.name}</Title>
        <Text>{building.desc}</Text>
        <Text>
          {formatNumber(production)}/sec
          <span style={{ color: "#899bb5" }}> each building, </span>
          {formatNumber(production * building.amount)}/sec
          <span style={{ color: "#899bb5" }}> overall</span>
        </Text>
      </Content>
      <Cost>
        <div>
          <Star size={12} />
        </div>
        {formatNumber(building.cost)}
      </Cost>
    </Button>
  );
};

export default BuildingButton;
