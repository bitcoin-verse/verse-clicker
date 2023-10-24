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
  grid-template-columns: 4rem auto;
  /* grid-template-areas: "img content cost" "img content ."; */

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
  padding: 0.5rem 0.75rem 0.5rem 0;
  display: flex;
  gap: 0.25rem;
  justify-content: flex-end;
  align-items: center;
  & > div {
    color: #d7b98b;
  }
`;
