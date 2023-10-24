import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";

const TabsWrapper = styled.div`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
  padding: 0.25rem;
  border-radius: 2.25rem;
  gap: 0.5rem;
  width: fit-content;
  align-self: center;

  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const TabButton = styled.button<{ $isSelected: boolean }>`
  outline: none;
  border: none;

  padding: 0.5rem 1rem;
  border-radius: 2.25rem;

  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          background: #0085ff;
          color: white;
        `
      : css`
          background: transparent;
          color: #899bb5;
        `};
`;

interface Props {
  tabs: ReactElement[];
}

const Tabs: FC<Props> = ({ tabs }) => {
  return <TabsWrapper>{tabs.map((t) => t)}</TabsWrapper>;
};
export default Tabs;