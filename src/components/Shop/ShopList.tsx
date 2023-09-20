import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { useTrackedState } from "../../context/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopList: FC = () => {
  const { buildings } = useTrackedState();
  const unlockedBuildings = buildings.filter((building) => !building.locked);

  return (
    <Wrapper>
      <h3>The Shop List</h3>
      {unlockedBuildings.map((building, i) => (
        <Button key={i}>{building.name}</Button>
      ))}
    </Wrapper>
  );
};

export default ShopList;
