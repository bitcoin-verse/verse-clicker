import styled, { css } from "styled-components";
import { colors } from "./colors";

export const Label = styled.span<{
  $color?: "secondary" | "warning";
}>`
  ${({ $color }) => {
    switch ($color) {
      case "secondary":
        return css`
          color: ${colors.shade80};
        `;
      case "warning":
        return css`
          color: ${colors.yellow100};
        `;
      default:
        return css`
          color: ${colors.shade100};
        `;
    }
  }}
`;
