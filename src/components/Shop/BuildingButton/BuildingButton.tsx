import React, { FC } from "react";
import { formatNumber } from "../../../helpers/formatNumber";
import { Amount, Button, Content, Cost, Image } from "./styled";
import { useTrackedState } from "../../../context/store";
import { Title } from "../../Title";
import { Text } from "../../Text";
import Star from "../../Icons/Star";
import Building from "../../../classes/Building";
import { useProduction } from "../../../hooks/useProduction";
import placeholder from "../../../assets/placeholder.png";

interface Props {
  building: Building;
}

export const BuildingButton: FC<Props> = ({ building }) => {
  const { player } = useTrackedState();
  const [production] = useProduction(building);

  return (
    <Button
      disabled={building.locked}
      $unaffordable={player.cookies < building.cost}
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
        <Star size={12} />
        {formatNumber(building.cost)}
      </Cost>
    </Button>
  );
};

export default BuildingButton;
