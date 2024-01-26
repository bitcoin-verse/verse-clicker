import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 1rem;
  top: 2rem;

  @media (min-width: 768px) {
    left: 1rem;
    top: 0;
    right: initial;
    padding: 0.75rem;
  }
`;

export const CampaignButton = styled.button<{ $small?: boolean }>`
  background: none;
  height: 2rem;
  width: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 2rem;
  position: relative;
  z-index: 0;
  & > img {
    width: 2.875rem;
    object-fit: contain;
    animation: glow 1.4s ease-out infinite;
  }

  &::after {
    content: "";
    z-index: -1;
    background: linear-gradient(180deg, #425472 0%, #313e57 100%);
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
  }

  ${({ $small }) =>
    $small &&
    css`
      height: 2.25rem;
      width: 2.25rem;
      margin-bottom: unset;
      & > img {
        filter: none;
      }
      @media (min-width: 768px) {
        height: 2.25rem;
        width: 2.25rem;
      }
    `}

  @keyframes glow {
    0% {
      box-shadow: 0 0 0 0 #ad2d2b;
    }
    100% {
      box-shadow: 0 0 2rem 0 #ad2d2b;
    }
  }
`;
