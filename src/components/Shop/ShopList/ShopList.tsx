import React, { FC, useEffect, useState } from "react";
import { useTrackedState } from "../../../context/store";

import BuildingButton from "./BuildingButton";
import {
  BottomShadow,
  BuildingsWrapper,
  PurchaseButtons,
  Wrapper,
} from "./styled";

import PurchaseAmount from "../../GameBoard/PurchaseAmount";
import MobileTitle from "../MobileTitle";
import CookiesDisplay from "../CookiesDisplay";
import Advertisement from "../../Advertisement";
import useScreenWidth from "../../../hooks/useScreenWidth";

interface Props {
  toggleOpen: boolean;
  setToggleOpen: (open: boolean) => void;
}

const ShopList: FC<Props> = ({ toggleOpen, setToggleOpen }) => {
  const { buildings } = useTrackedState();
  const [isOpen, setIsOpen] = useState(false);
  const width = useScreenWidth();

  useEffect(() => {
    if (toggleOpen) {
      setIsOpen(true);
      setToggleOpen(false);
    }
  }, [toggleOpen]);

  useEffect(() => {
    if (width >= 768) return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, width]);

  return (
    <>
      <Wrapper $isOpen={isOpen}>
        <MobileTitle title="Tools" setIsOpen={setIsOpen} />

        <PurchaseButtons>
          <PurchaseAmount mobileVersion />
        </PurchaseButtons>
        <BuildingsWrapper>
          {buildings.map((building, i) => {
            if (building.locked && buildings?.[i - 3]?.locked) return null;

            return (
              <BuildingButton
                key={building.name}
                building={building}
                index={i}
              />
            );
          })}
        </BuildingsWrapper>
        <BottomShadow />
        <CookiesDisplay />
      </Wrapper>
      <Advertisement />
    </>
  );
};

export default ShopList;
