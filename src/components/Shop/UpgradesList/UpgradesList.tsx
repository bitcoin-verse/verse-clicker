import React, { FC, useEffect, useState } from "react";
import UpgradeButton from "./UpgradeButton";
import {
  NextUpgrade,
  UpgradeAllWrapper,
  UpgradesWrapper,
  Wrapper,
} from "./styled";
import useUpgradesList from "../../../hooks/useUpgradesList";
import MobileTitle from "../MobileTitle";
import UpgradeAll from "../../GameBoard/UpgradeAll";
import CookiesDisplay from "../CookiesDisplay";

interface Props {
  toggleOpen: boolean;
  setToggleOpen: (open: boolean) => void;
}

const UpgradesList: FC<Props> = ({ toggleOpen, setToggleOpen }) => {
  const upgrades = useUpgradesList();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (toggleOpen) {
      setIsOpen(true);
      setToggleOpen(false);
    }
  }, [toggleOpen]);

  useEffect(() => {
    console.log(screen.width);
    if (isOpen && screen.width < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, screen.width]);

  return (
    <Wrapper $isOpen={isOpen}>
      <MobileTitle title="Upgrades" setIsOpen={setIsOpen} />

      <UpgradeAllWrapper>
        <UpgradeAll mobileVersion />
      </UpgradeAllWrapper>
      <UpgradesWrapper>
        {upgrades.map((upgrade) => {
          return <UpgradeButton key={upgrade.name} upgrade={upgrade} />;
        })}
        <NextUpgrade>Unlock upgrades by purchasing more buildings</NextUpgrade>
      </UpgradesWrapper>
      <CookiesDisplay />
    </Wrapper>
  );
};

export default UpgradesList;
