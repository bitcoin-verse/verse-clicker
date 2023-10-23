import styled from "styled-components";

export const Dialog = styled.dialog`
  border: none;
  border-radius: 1rem;

  color: white;

  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  min-height: 22rem;
  box-sizing: border-box;
  outline: none;
  background: #030c14;

  &::backdrop {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(0.2rem);
  }

  overscroll-behavior: none;

  @media (min-width: 768px) {
    max-width: 24rem;
    box-shadow: 0px 2px 60px 0px #2fa9ee33;
    margin: auto;
    height: fit-content;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid #1a2231;
`;

export const ModalContent = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem 2rem;
`;

export const TitleText = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
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
