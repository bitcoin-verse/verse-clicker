import React, { FC } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import placeholder from "../../assets/placeholder.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: visible;
`;

const Button = styled.button<{ isSelected: boolean }>`
  position: relative;

  border: none;
  outline: none;
  cursor: pointer;
  overflow: visible;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 0.25rem 0.5rem 0.25rem 0.25rem;

  z-index: 0;
  border-radius: 0.25rem;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background: #0085ff;

          &:after {
            content: "";
            position: absolute;
            background: #0085ff;
            right: -0.5rem;
            top: calc(50% -0.5rem);
            width: 1.25rem;
            height: 1.25rem;
            transform: rotateZ(45deg);
            z-index: -1;
          }
        `
      : css`
          background: rgba(255, 255, 255, 0.2);
        `}

  &:disabled {
    cursor: default;
    background: lightgrey;
    color: black;
    filter: blur(4px);
  }
`;

const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: white;
  flex: 1;
`;

const Amount = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.5;
`;

const Image = styled.img`
  height: 2rem;
  width: 2rem;
`;

const ShopList: FC = () => {
  const { buildings, currentBuilding } = useTrackedState();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {buildings.map((building, i) => {
        return (
          <Button
            key={i}
            isSelected={building.name === currentBuilding}
            disabled={building.locked}
            onClick={() =>
              dispatch({ type: "SET_BUILDING", payload: building.name })
            }
          >
            <Image src={placeholder} alt={building.name} />
            <Name>{building.name}</Name>
            <Amount>{building.amount}</Amount>
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default ShopList;
