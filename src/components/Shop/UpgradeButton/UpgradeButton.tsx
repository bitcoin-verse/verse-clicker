import React, { FC } from "react";
import { Title } from "../../Title";
import { Text } from "../../Text";
import { Button, Cost } from "./styled";
import { useTrackedState } from "../../../context/store";
import Upgrade from "../../../classes/Upgrade";
import { formatNumber } from "../../../helpers/formatNumber";
import Star from "../../Icons/Star";

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
  return (
    <Button
      onClick={() => {
        if (player.cookies < upgrade.cost) return;
        // buyUpgrade(i);
      }}
      disabled={player.cookies < upgrade.cost}
    >
      <div>
        <Title>
          {upgrade.name} ({upgrade.bName})
        </Title>
        <Text>{upgrade.desc}</Text>
      </div>
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
