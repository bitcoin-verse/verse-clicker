import React, { FC, useCallback, useMemo } from "react";

import placeholder from "../../../../assets/placeholder.png";
import Building from "../../../../classes/Building";
import { useAudio } from "../../../../context/AudioProvider";
import { useSocketCtx } from "../../../../context/SocketContext";
import { useTrackedState } from "../../../../context/store";
import {
  getBuildingsCost,
  getMaxBuilding,
} from "../../../../helpers/buildingHelpers";
import { formatNumber } from "../../../../helpers/formatNumber";
import { useProduction } from "../../../../hooks/useProduction";
import Marquee from "../../../Marquee";
import PointsIcon from "../../../PointsIcon";
import { Text } from "../../../Text";
import { Title } from "../../../Title";
import { Amount, Button, Cost, Image } from "./styled";

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

  const pcToNextUpgrade = useMemo(() => {
    const nextUpgrade = building.upgrades.find((i) => !i.owned);
    const prevUpgrade = building.upgrades.findLast((i) => i.owned);

    if (!nextUpgrade?.limit || building.amount === 0) return 0;

    // can already purchase next upgrade
    if (building.amount >= nextUpgrade.limit) return 100;

    const diff = nextUpgrade.limit - (prevUpgrade?.limit || 0);

    const pc = ((building.amount - (prevUpgrade?.limit || 0)) / diff) * 100;

    return pc;
  }, [building.upgrades, building.amount]);

  return (
    <Button
      disabled={
        player.cookies < cost || (building.locked && !player.isGuildMember)
      }
      $unaffordable={
        player.cookies < cost || (building.locked && !player.isGuildMember)
      }
      $locked={building.locked && !player.isGuildMember}
      onClick={() => {
        buyBuilding(amount);
      }}
    >
      <Amount $nextPc={pcToNextUpgrade}>Owned: {building.amount}</Amount>

      <Image
        src={
          building.locked && !player.isGuildMember
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
        <span style={{ color: "#899bb5" }}> all</span>
      </Text>

      <Cost $unaffordable={player.cookies < cost}>
        <span>x{amount || 1}</span>
        <div>
          <PointsIcon size={12} />
        </div>
        {formatNumber(cost)}
      </Cost>
    </Button>
  );
};

export default BuildingButton;
