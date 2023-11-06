import React, { FC, useCallback } from "react";

import { Title } from "../../../Title";
import { Text } from "../../../Text";
import { Button, Cost } from "./styled";
import { useTrackedState } from "../../../../context/store";
import Upgrade from "../../../../classes/Upgrade";
import { formatNumber } from "../../../../helpers/formatNumber";
import Star from "../../../Icons/Star";
import { useSocketCtx } from "../../../../context/SocketContext";

import { useAudio } from "../../../../context/AudioProvider";

export type ModifiedUpgrade = Upgrade & {
  bIndex: number;
  bName: string;
  uIndex: number;
};

interface Props {
  upgrade: ModifiedUpgrade;
}

const UpgradeButton: FC<Props> = ({ upgrade }) => {
  const { player } = useTrackedState();
  const { socket } = useSocketCtx();
  const { playBuy } = useAudio();

  const buyUpgrade = useCallback(
    (bIndex: number, uIndex: number) => {
      socket.emit("buy_upgrade", {
        building: bIndex,
        upgrade: uIndex,
      });

      if (playBuy) playBuy();
    },
    [playBuy],
  );

  return (
    <Button
      onClick={() => {
        if (player.cookies < upgrade.cost) return;
        buyUpgrade(upgrade.bIndex, upgrade.uIndex);
      }}
      disabled={player.cookies < upgrade.cost}
      $unaffordable={player.cookies < upgrade.cost}
    >
      <Title style={{ gridArea: "name" }}>
        {upgrade.name} ({upgrade.bName})
      </Title>
      <Text style={{ gridArea: "desc" }}>{upgrade.desc}</Text>

      <Cost>
        <div>
          <Star size={12} />
        </div>
        {formatNumber(upgrade.cost)}
      </Cost>
    </Button>
  );
};

export default UpgradeButton;
