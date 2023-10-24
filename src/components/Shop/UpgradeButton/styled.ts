import styled, { css } from "styled-components";

export const Button = styled.button<{ $unaffordable?: boolean }>`
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  overflow: visible;
  border-radius: 0.75rem;
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: auto 8rem;
  padding: 0.5rem;

  text-align: left;
  &:disabled {
    cursor: default;
    filter: blur(0.5rem);
  }

  ${({ $unaffordable }) =>
    $unaffordable &&
    css`
      color: red;
    `}
`;

export const Cost = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #d7b98b;
  text-align: right;

  display: flex;
  gap: 0.25rem;
  justify-content: flex-end;
  align-items: center;
  & > div {
    color: #d7b98b;
  }
`;
