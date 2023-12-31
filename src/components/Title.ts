import styled from "styled-components";

export const Title = styled.div<{ $secondary?: boolean }>`
  color: ${({ $secondary }) => ($secondary ? "#899bb5" : "white")};

  font-size: 1rem;
  font-weight: 600;
`;
