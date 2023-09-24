import React, { FC } from "react";
import styled, { css } from "styled-components";
import { parseEther } from "viem";

const Button = styled.button<{ $noVerse: boolean }>`
  padding: 1rem;
  font-weight: 600;
  outline: none;

  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 1rem;
  background: #163756;
  color: white;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }

  ${({ $noVerse }) =>
    $noVerse
      ? css`
          &:after {
            content: "CAN'T AFFORD";
          }
        `
      : ""}
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  text-align: left;
  color: inherit;
`;

const Price = styled.div`
  font-size: 0.75rem;
  color: inherit;
  color: #899bb5;
`;

interface Props {
  buttons: {
    title: string;
    value: number;
    hours: number;
  }[];

  isLoading: boolean;
  handleBurn: (amount: number, hours: number) => Promise<void>;
  verseBalance: bigint;
}
const BurnButtons: FC<Props> = ({
  buttons,
  isLoading,
  handleBurn,
  verseBalance,
}) => {
  return (
    <>
      {buttons.map((button) => {
        const weiValue = parseEther(button.value.toString());
        return (
          <Button
            key={button.title}
            disabled={isLoading || verseBalance < weiValue}
            $noVerse={verseBalance < weiValue}
            onClick={() => {
              handleBurn(button.value, button.hours);
            }}
          >
            <Title>{button.title}</Title>
            <Price>{button.value.toLocaleString()} VTEST</Price>
          </Button>
        );
      })}
    </>
  );
};

export default BurnButtons;
