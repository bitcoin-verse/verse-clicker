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

  grid-template-columns: 4rem auto auto;
  grid-template-areas: "img name cost" "img desc desc" "img info .";
  text-align: left;

  &:disabled {
    cursor: default;
  }

  ${({ $unaffordable }) =>
    $unaffordable &&
    css`
      background: #342716;
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
