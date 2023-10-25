import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  background: black;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          background: black;
          z-index: 88;
        `
      : css`
          transform: scaleY(0);
          height: 0;
        `}

  @media (min-width: 768px) {
    transform: unset;
    height: unset;

    position: relative;
    background: transparent;

    display: flex;
    gap: 1rem;
    max-width: calc(100vw);
    overflow-x: auto;
    overflow-y: visible;
    padding: 1rem;
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

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #1a2231;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  color: #0085ff;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;

  & > svg {
    color: #0085ff;
  }
`;

export const PurchaseButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BuildingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  overflow: scroll;
  height: 100%;
`;
