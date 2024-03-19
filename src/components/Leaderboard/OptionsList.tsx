import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { LeaderboardGameMode } from "../../context/reducers/network";

interface Option {
  label: string;
  icon?: ReactNode;
  tags?: string[];
  value: LeaderboardGameMode;
}

interface OptionsListProps {
  options: Option[];
  onOptionClick?: (option: Option) => void;
}

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1rem 0;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const OptionIcon = styled.span`
  margin-right: 0px;
  margin-left: 2rem;
  vertical-align: middle;
  line-height: 0;
`;

const OptionLabel = styled.span`
  margin-left: 1rem;
  font-weight: 600;
  font-size: 1rem;
`;

const OptionTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0.25rem;
`;

const OptionTag = styled.span`
  background-color: rgb(54, 134, 247);
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-right: 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;

const OptionsList: FC<OptionsListProps> = ({ options, onOptionClick }) => {
  const handleOptionClick = (option: Option) => {
    if (onOptionClick) {
      onOptionClick(option);
    }
  };

  return (
    <>
      {options.map((option) => (
        <OptionContainer
          key={option.value}
          onClick={() => handleOptionClick(option)}
        >
          {option.icon && <OptionIcon>{option.icon}</OptionIcon>}
          <OptionLabel>{option.label}</OptionLabel>
          <OptionTagsWrapper>
            {option.tags?.map((tag) => <OptionTag key={tag}>{tag}</OptionTag>)}
          </OptionTagsWrapper>
        </OptionContainer>
      ))}
    </>
  );
};

export default OptionsList;
