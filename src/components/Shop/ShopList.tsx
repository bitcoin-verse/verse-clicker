import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { useDispatch, useTrackedState } from "../../context/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShopList: FC = () => {
  const { buildings } = useTrackedState();
  const dispatch = useDispatch();
  const unlockedBuildings = buildings.filter((building) => !building.locked);

  return (
    <Wrapper>
      <h3>The Shop List</h3>
      {unlockedBuildings.map((building, i) => (
        <Button
          key={i}
          onClick={() =>
            dispatch({ type: "SET_BUILDING", payload: building.name })
          }
        >
          {building.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default ShopList;
