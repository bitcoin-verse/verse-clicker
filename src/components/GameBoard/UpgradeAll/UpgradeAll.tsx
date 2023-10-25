import React, { FC, useCallback, useMemo } from "react";
import { Button } from "../../Button";
import { useSocketCtx } from "../../../context/SocketContext";
import useUpgradesList from "../../../hooks/useUpgradesList";
import { useTrackedState } from "../../../context/store";
import { ModifiedUpgrade } from "../../Shop/UpgradesList/UpgradeButton";
import styled from "styled-components";

export const Wrapper = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "flex" : "none")};

  @media (min-width: 768px) {
    display: flex;
  }
`;

interface Props {
  mobileVersion?: boolean;
}

const UpgradeAll: FC<Props> = ({ mobileVersion = false }) => {
  const { socket } = useSocketCtx();
  const { player } = useTrackedState();
  const upgradesList = useUpgradesList();

  const buyUpgrade = useCallback((bIndex: number, uIndex: number) => {
    socket.emit("buy_upgrade", {
      building: bIndex,
      upgrade: uIndex,
    });
  }, []);

  const availableUpgrades = useMemo(() => {
    let availableCookies = player.cookies;

    return upgradesList.reduce((prev: ModifiedUpgrade[], upgrade) => {
      if (availableCookies > upgrade.cost) {
        availableCookies = availableCookies - upgrade.cost;

        return [...prev, upgrade];
      }
      return prev;
    }, []);
  }, [player.cookies, upgradesList]);

  const buyAllUpgrades = () => {
    if (availableUpgrades.length === 0) return;

    availableUpgrades.forEach((upgrade) => {
      buyUpgrade(upgrade.bIndex, upgrade.uIndex);
    });
  };

  return (
    <Wrapper $show={mobileVersion}>
      <Button
        size="small"
        onClick={buyAllUpgrades}
        disabled={availableUpgrades.length === 0}
      >
        Buy all
      </Button>
    </Wrapper>
  );
};

export default UpgradeAll;
