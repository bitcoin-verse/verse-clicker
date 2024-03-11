import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface Option {
  label: string;
  icon?: ReactNode;
  tags?: string[];
}

interface OptionsListProps {
  options: Option[];
  onOptionClick?: (option: Option) => void;
}

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px 0px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const OptionIcon = styled.span`
  margin-right: 8px;
  margin-left: 16px;
`;

const OptionLabel = styled.span`
  margin-left: 16px;
  font-weight: bold;
`;

const OptionTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 4px;
`;

const OptionTag = styled.span`
  background-color: #2e3a4f;
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 4px;
  font-size: 0.75rem;
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
          key={option.label}
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
