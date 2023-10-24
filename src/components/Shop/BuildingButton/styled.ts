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
  grid-template-columns: 4rem auto 4rem;
  grid-template-areas: "img content cost" "img content .";

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

export const Content = styled.div`
  grid-area: content;
  padding: 0.5rem 0;
  text-align: left;
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
`;

export const Image = styled.img`
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.75rem;
  background: white;
`;

export const Amount = styled.div`
  position: absolute;

  display: flex;

  justify-content: center;
  align-items: center;
  height: 1.375rem;
  width: 1.375rem;
  left: 3.3125rem;
  top: -0.6875rem;
  border-radius: 50%;
  border: 3px solid #030c14;
  background: white;
  color: #163756;

  font-size: 0.75rem;
  font-weight: 600;
`;
