import styled from "styled-components";

export const Text = styled.div<{ $secondary?: boolean }>`
  color: ${({ $secondary }) => ($secondary ? "#899bb5" : "white")};

  font-size: 0.75rem;
  font-weight: 400;
`;
