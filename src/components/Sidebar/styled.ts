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
`;
