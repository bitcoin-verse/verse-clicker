import styled, { css } from "styled-components";

export const Button = styled.button<{
  $unaffordable?: boolean;
  $locked?: boolean;
}>`
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
  grid-template-areas: "img name cost" "img desc desc" "img info amount";
  text-align: left;

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #586f91 0%, #425472 100%);
  }
  &:active {
    background: linear-gradient(180deg, #334059 0%, #425371 100%);
  }
  &:disabled {
    cursor: default;
  }

  ${({ $unaffordable }) =>
    $unaffordable &&
    css`
      background: #342716;

      &:hover,
      &:focus,
      &:active {
        background: #342716;
      }
    `}

  ${({ $locked }) =>
    $locked &&
    css`
      filter: blur(0.5rem);
    `}
`;

export const Cost = styled.div<{ $unaffordable?: boolean }>`
  padding-right: 0.5rem;
  padding-top: 0.5rem;

  grid-area: cost;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: right;
  display: flex;
  gap: 0.25rem;
  justify-content: flex-end;
  align-items: center;

  ${({ $unaffordable }) =>
    $unaffordable
      ? css`
          color: #c87a1e;
          & > div {
            color: #c87a1e;
          }
        `
      : css`
          color: #d7b98b;

          & > div > svg {
            color: #d7b98b;
          }
          & > span {
            color: #899bb5;
          }
        `}
`;

export const Image = styled.img`
  grid-area: img;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.75rem;
  background: white;
`;

export const Amount = styled.div<{ $nextPc?: number }>`
  display: flex;
  grid-area: amount;
  position: relative;

  justify-content: center;
  align-items: center;

  padding: 0.25rem 0.5rem;

  right: 0;
  bottom: 0;
  width: max-content;
  justify-self: flex-end;
  align-self: flex-end;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 0;
  color: #c5cedb;
  background: #1a2231;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.75rem;
  overflow: hidden;

  &::after {
    height: 100%;
    background: #030c14;
    filter: brightness(50%);
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: ${({ $nextPc }) => $nextPc}%;
    z-index: -1;
  }
`;
