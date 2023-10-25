import React, { FC, useEffect, useState } from "react";
import { useTrackedState } from "../../../context/store";

import BuildingButton from "./BuildingButton";
import {
  BuildingsWrapper,
  CloseButton,
  CookiesDisplay,
  ModalTitle,
  PurchaseButtons,
  Wrapper,
} from "./styled";

import Cross from "../../Icons/Cross";

import { H2 } from "../../H2";
import PurchaseAmount from "../../GameBoard/PurchaseAmount";
import Star from "../../Icons/Star";
import { formatNumber } from "../../../helpers/formatNumber";

interface Props {
  toggleOpen: boolean;
  setToggleOpen: (open: boolean) => void;
}

const ShopList: FC<Props> = ({ toggleOpen, setToggleOpen }) => {
  const { buildings, player } = useTrackedState();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (toggleOpen) {
      setIsOpen(true);
      setToggleOpen(false);
    }
  }, [toggleOpen]);

  return (
    <Wrapper $isOpen={isOpen}>
      <ModalTitle>
        <H2>Buildings</H2>
        <CloseButton onClick={() => setIsOpen(false)}>
          <Cross />
        </CloseButton>
      </ModalTitle>

      <PurchaseButtons>
        <PurchaseAmount mobileVersion />
      </PurchaseButtons>
      <BuildingsWrapper>
        {buildings.map((building, i) => {
          if (building.locked && buildings?.[i - 3]?.locked) return null;

          return (
            <BuildingButton key={building.name} building={building} index={i} />
          );
        })}
      </BuildingsWrapper>
      <CookiesDisplay>
        <Star size="1.5rem" /> {formatNumber(player.cookies)}
      </CookiesDisplay>
    </Wrapper>
  );
};

export default ShopList;
