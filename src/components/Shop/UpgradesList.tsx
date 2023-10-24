import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";
import { useSocketCtx } from "../../context/SocketContext";
import UpgradeButton, { ModifiedUpgrade } from "./UpgradeButton";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  max-width: calc(100vw);
  overflow-x: auto;
  overflow-y: visible;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0;

    gap: 0.5rem;
    flex-direction: column;

    padding-bottom: unset;
    padding-left: unset;
    max-width: unset;
    overflow: visible;
  }
`;

const NextUpgrade = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0 1.25rem;
  text-align: center;
`;

interface Props {}

const UpgradesList: FC<Props> = () => {
  const { socket } = useSocketCtx();
  const { player, buildings } = useTrackedState();

  /*   const buyUpgrade = useCallback(
    (uIndex: number) => {
      socket.emit("buy_upgrade", {
        building: bIndex,
        upgrade: uIndex,
      });
    },
    [building.name, bIndex],
  ); */

  const upgrades = useMemo(() => {
    return buildings.reduce((prev: ModifiedUpgrade[], building, bIndex) => {
      const buildingUpgrades = building.upgrades.reduce(
        (p, upgrade, uIndex) => {
          if (upgrade.owned) return p;
          if (building.amount >= upgrade.limit) {
            return [...p, { ...upgrade, bIndex, uIndex, bName: building.name }];
          }
          return p;
        },
        [] as ModifiedUpgrade[],
      );

      return [...prev, ...buildingUpgrades];
    }, []);
  }, []);

  return (
    <Wrapper>
      {upgrades.map((upgrade) => {
        return <UpgradeButton key={upgrade.name} upgrade={upgrade} />;
      })}
      <NextUpgrade>Unlock upgrades by purchasing more buildings</NextUpgrade>
    </Wrapper>
  );
};

export default UpgradesList;
