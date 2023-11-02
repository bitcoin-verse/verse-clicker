import styled from "styled-components";

export const H3 = styled.h3<{ $align?: "left" }>`
  font-size: 1rem;
  font-weight: 600;

  text-align: ${({ $align }) => ($align ? "left" : "unset")};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
