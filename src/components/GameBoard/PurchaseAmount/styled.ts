import styled from "styled-components";

export const Wrapper = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? "flex" : "none")};

  @media (min-width: 768px) {
    display: flex;
  }
`;
