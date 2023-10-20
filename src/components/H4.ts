import styled from "styled-components";
import { colors } from "./colors";

export const H4 = styled.h4<{ $secondary?: boolean }>`
  font-size: 1.125rem;
  font-weight: 600;

  color: ${({ $secondary }) => ($secondary ? colors.shade80 : colors.white)};
`;
