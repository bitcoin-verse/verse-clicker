import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    left: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem;
  gap: 0.5rem;

  @media (min-width: 768px) {
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
