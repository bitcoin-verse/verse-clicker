import React, { FC } from "react";
import styled from "styled-components";
import { useTrackedState } from "../../context/store";

import BuildingButton from "./BuildingButton";

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

const ShopList: FC = () => {
  const { buildings } = useTrackedState();

  return (
    <Wrapper>
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
