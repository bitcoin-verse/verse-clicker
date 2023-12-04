import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  background: black;
  display: flex;
  flex-direction: column;
  background: black;

  left: 0;
  width: 100%;
  height: 100%;

  z-index: 88;
  transition: bottom 0.25s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          bottom: 0;
        `
      : css`
          bottom: -100%;
        `}

  @media (min-width: 768px) {
    height: unset;

    position: relative;
    background: transparent;

    display: flex;
    gap: 1rem;
    max-width: calc(100vw);
    overflow-x: auto;
    overflow-y: visible;

    padding: 0;

    gap: 0.5rem;
    flex-direction: column;

    padding-bottom: unset;
    padding-left: unset;
    padding-right: 1rem;
    max-width: unset;
    overflow: visible;
  }
`;

export const PurchaseButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BuildingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  overflow: scroll;
  height: 100%;
  border-bottom: 1px solid #1a2231;
  position: relative;

  @media (min-width: 768px) {
    padding: 0;
    padding-right: 0.25rem;
    max-height: 44rem;
    overflow-y: scroll;
    overflow-x: visible;
    border-bottom: none;
    padding-bottom: 2.5rem;
    padding-left: 1rem;
    margin-left: -1rem;

    &::-webkit-scrollbar {
      width: 0.25rem;
      background-color: #000;
      border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #313e57;
      border-radius: 0.5rem;
    }

    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat;
  }
`;
