import React, { FC, useCallback } from "react";

import Upgrade from "../../../../classes/Upgrade";
import { useAudio } from "../../../../context/AudioProvider";
import { useSocketCtx } from "../../../../context/SocketContext";
import { useTrackedState } from "../../../../context/store";
import { formatNumber } from "../../../../helpers/formatNumber";
import PointsIcon from "../../../PointsIcon";
import { Text } from "../../../Text";
import { Title } from "../../../Title";
import { Button, Cost } from "./styled";

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
    [playBuy, socket],
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
        {upgrade.name} <small>({upgrade.bName})</small>
      </Title>
      <Text style={{ gridArea: "desc" }}>{upgrade.desc}</Text>

      <Cost>
        <div>
          <PointsIcon size={12} />
        </div>
        {formatNumber(upgrade.cost)}
      </Cost>
    </Button>
  );
};

export default UpgradeButton;
