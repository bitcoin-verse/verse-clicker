import React, { FC } from "react";
import styled, { css } from "styled-components";

const TabsWrapper = styled.div`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
  padding: 0.25rem;
  border-radius: 2.25rem;
  gap: 0.5rem;
  width: fit-content;
  justify-self: flex-end;
`;

const Button = styled.button<{ isSelected: boolean }>`
  outline: none;
  border: none;
  background: none;

  padding: 0.5rem;
  border-radius: 2.25rem;

  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? css`
          background: #0085ff;
          color: white;
        `
      : css`
          color: #899bb5;
        `};
`;

interface Props {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
}

const Tabs: FC<Props> = ({ selectedTab, setSelectedTab }) => {
  return (
    <TabsWrapper>
      <Button
        isSelected={selectedTab === 0}
        type="button"
        onClick={() => setSelectedTab(0)}
      >
        Shops
      </Button>
      <Button
        isSelected={selectedTab === 1}
        type="button"
        onClick={() => setSelectedTab(1)}
      >
        Scores
      </Button>
    </TabsWrapper>
  );
};
export default Tabs;
