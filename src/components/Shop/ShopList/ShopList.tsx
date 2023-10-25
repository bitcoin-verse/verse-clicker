import React, { FC, useEffect, useState } from "react";
import { useTrackedState } from "../../../context/store";

import BuildingButton from "./BuildingButton";
import {
  BuildingsWrapper,
  CloseButton,
  ModalTitle,
  PurchaseButtons,
  Wrapper,
} from "./styled";

import Cross from "../../Icons/Cross";

import { H2 } from "../../H2";
import PurchaseAmount from "../../GameBoard/PurchaseAmount";

interface Props {
  toggleOpen: boolean;
  setToggleOpen: (open: boolean) => void;
}

const ShopList: FC<Props> = ({ toggleOpen, setToggleOpen }) => {
  const { buildings } = useTrackedState();

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
        <PurchaseAmount show />
      </PurchaseButtons>
      <BuildingsWrapper>
        {buildings.map((building, i) => {
          if (building.locked && buildings?.[i - 3]?.locked) return null;

          return (
            <BuildingButton key={building.name} building={building} index={i} />
          );
        })}
      </BuildingsWrapper>
      <div>COOKIEES</div>
    </Wrapper>
  );
};

export default ShopList;
