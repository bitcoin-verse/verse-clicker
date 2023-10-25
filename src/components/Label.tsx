import styled from "styled-components";

export const Label = styled.span<{ $secondary?: boolean; $size?: string }>`
  color: ${({ $secondary }) => ($secondary ? "#899bb5" : "white")};
  font-size: ${({ $size }) => ($size ? `${$size}rem` : "1rem")};
`;
