import styled from "styled-components";

export const Label = styled.span<{ $secondary?: boolean }>`
  color: ${({ $secondary }) => ($secondary ? "#899bb5" : "white")};
`;
