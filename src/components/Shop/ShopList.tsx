import React, { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useTrackedState } from "../../context/store";

import BuildingButton from "./BuildingButton";

const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  background: black;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ $isOpen }) =>
    $isOpen
      ? css``
      : css`
          transform: scaleY(0);
          height: 0;
        `}

  @media (min-width: 768px) {
    transform: unset;
    height: unset;

    position: relative;
    background: transparent;

    display: flex;
    gap: 1rem;
    max-width: calc(100vw);
    overflow-x: auto;
    overflow-y: visible;
    padding: 1rem;
    padding: 0;

    gap: 0.5rem;
    flex-direction: column;

    padding-bottom: unset;
    padding-left: unset;
    padding-right: 1rem;
    max-width: unset;
    overflow: visible;
  }
`;

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
      <button onClick={() => setIsOpen(false)}>Close</button>
      {buildings.map((building, i) => {
        if (building.locked && buildings?.[i - 3]?.locked) return null;

        return (
          <BuildingButton key={building.name} building={building} index={i} />
        );
      })}
    </Wrapper>
  );
};

export default ShopList;
