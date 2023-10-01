import React, { FC, useCallback } from "react";
import styled from "styled-components";
import Upgrade from "../../classes/Upgrade";
import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import Building from "../../classes/Building";
import InfoTitle from "../InfoTitle";
import { useSocketCtx } from "../../context/SocketContext";

const Button = styled.button`
  background: indianred;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  align-items: center;

  flex: 1;

  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-areas: "title price" "desc price";
  background: #163756;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const Title = styled.div`
  grid-area: title;
  font-weight: 600;
  font-size: 0.75rem;
  text-align: left;
  color: inherit;
`;

const Description = styled.div`
  grid-area: desc;
  font-size: 0.75rem;
  text-align: left;
  color: inherit;
  color: #899bb5;
`;
const Price = styled.div`
  grid-area: price;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: right;
  color: inherit;
`;

const UpgrdesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NextUpgrade = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0 1.25rem;
  text-align: center;
`;

interface Props {
  building: Building;
  bIndex: number;
  upgrades: Upgrade[];
}

const UpgradesList: FC<Props> = ({ upgrades, building, bIndex }) => {
  const { socket } = useSocketCtx();
  const { player } = useTrackedState();

  const buyUpgrade = useCallback(
    (uIndex: number) => {
      socket.emit("buy_upgrade", {
        building: bIndex,
        upgrade: uIndex,
      });
    },
    [building.name, bIndex],
  );

  return (
    <UpgrdesWrapper>
      <InfoTitle>Upgrades</InfoTitle>
      {upgrades.map((upgrade, i) => {
        if (upgrade.owned) return null;
        if (building.amount >= upgrade.limit) {
          return (
            <Button
              key={i}
              onClick={() => {
                if (player.cookies < upgrade.cost) return;
                buyUpgrade(i);
              }}
              disabled={player.cookies < upgrade.cost}
            >
              <Title>{upgrade.name}</Title>
              <Description>{upgrade.desc}</Description>
              <Price>{formatNumber(upgrade.cost)}</Price>
            </Button>
          );
        }

        if (
          building.amount >= upgrades[i - 1]?.limit ||
          upgrades[i - 1] === undefined
        ) {
          return (
            <NextUpgrade key={upgrade.name}>
              You need {upgrade.limit - building.amount} more {building.name}(s)
              to unlock the next upgrade
            </NextUpgrade>
          );
        }
      })}
    </UpgrdesWrapper>
  );
};

export default UpgradesList;
