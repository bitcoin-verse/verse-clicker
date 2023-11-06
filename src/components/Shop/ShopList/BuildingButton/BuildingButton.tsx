import React, { FC, useCallback, useMemo } from "react";

import { formatNumber } from "../../../../helpers/formatNumber";
import { Amount, Button, Cost, Image } from "./styled";
import { useTrackedState } from "../../../../context/store";
import { Title } from "../../../Title";
import { Text } from "../../../Text";
import Star from "../../../Icons/Star";
import Building from "../../../../classes/Building";
import { useProduction } from "../../../../hooks/useProduction";
import { useSocketCtx } from "../../../../context/SocketContext";
import {
  getBuildingsCost,
  getMaxBuilding,
} from "../../../../helpers/buildingHelpers";

import placeholder from "../../../../assets/placeholder.png";
import Marquee from "../../../Marquee";
import { useAudio } from "../../../../context/AudioProvider";

interface Props {
  building: Building;
  index: number;
}

export const BuildingButton: FC<Props> = ({ building, index }) => {
  const { player, purchaseAmount } = useTrackedState();
  const { socket } = useSocketCtx();
  const { production } = useProduction(building);
  const { playBuy } = useAudio();

  const buyBuilding = useCallback(
    (amount: number) => {
      socket.emit("buy_building", { index, amount });
      if (playBuy) playBuy();
    },
    [building, index, playBuy],
  );

  const { amount, cost } = useMemo(() => {
    if (purchaseAmount !== "max") {
      return {
        amount: purchaseAmount,
        cost: getBuildingsCost(purchaseAmount, building.cost),
      };
    }

    return getMaxBuilding(player.cookies, building.cost);
  }, [player.cookies, building.cost]);

  const farmStakingMultiplier = player.isFarming || player.isStaking ? 2 : 1;

  return (
    <Button
      disabled={player.cookies < cost}
      $unaffordable={player.cookies < cost || building.locked}
      $locked={building.locked}
      onClick={() => {
        buyBuilding(amount);
      }}
    >
      <Amount>Owned: {building.amount}</Amount>

      <Image
        src={
          building.locked
            ? placeholder
            : require(`../../../../assets/buildings/${building.image}`)
        }
        style={{ height: "100%" }}
        alt={building.name}
      />

      <Marquee shouldAnimate={!building.locked}>
        <Title style={{ gridArea: "name", marginTop: "0.5rem" }}>
          {building.name}
        </Title>
      </Marquee>
      <Marquee shouldAnimate={!building.locked}>
        <Text style={{ gridArea: "desc" }}>{building.desc}</Text>
      </Marquee>
      <Text style={{ gridArea: "info", marginBottom: "0.5rem" }}>
        {formatNumber(production * farmStakingMultiplier)}/s
        <span style={{ color: "#899bb5" }}> each, </span>
        {formatNumber(production * building.amount * farmStakingMultiplier)}/s
        <span style={{ color: "#899bb5" }}> total</span>
      </Text>

      <Cost $unaffordable={player.cookies < cost}>
        <span>x{amount || 1}</span>
        <div>
          <Star size={12} />
        </div>
        {formatNumber(cost)}
      </Cost>
    </Button>
  );
};

export default BuildingButton;
