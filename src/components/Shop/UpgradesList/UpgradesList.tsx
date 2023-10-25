import React, { FC, useEffect, useMemo, useState } from "react";
import { useTrackedState } from "../../../context/store";
import UpgradeButton, { ModifiedUpgrade } from "./UpgradeButton";
import { NextUpgrade, Wrapper } from "./styled";
import useUpgradesList from "../../../hooks/useUpgradesList";

interface Props {
  toggleOpen: boolean;
  setToggleOpen: (open: boolean) => void;
}

const UpgradesList: FC<Props> = ({ toggleOpen, setToggleOpen }) => {
  const upgrades = useUpgradesList();
  const { buildings } = useTrackedState();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (toggleOpen) {
      setIsOpen(true);
      setToggleOpen(false);
    }
  }, [toggleOpen]);

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
