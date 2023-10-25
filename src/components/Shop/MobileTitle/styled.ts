import styled from "styled-components";

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
