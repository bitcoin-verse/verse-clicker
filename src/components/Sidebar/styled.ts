import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.5rem;
  z-index: 50;

  top: 50%;
  transform: translateY(-50%);

  right: 0;

  @media (min-width: 768px) {
    left: 0;
    right: unset;
    padding: 1.5rem;
  }
`;

export const SidebarButton = styled.button`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
  color: white;
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
`;
