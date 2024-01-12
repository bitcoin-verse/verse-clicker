import styled, { css } from "styled-components";

import { colors } from "./colors";

export const LinkButton = styled.a<{
  $design?: "primary" | "secondary";
}>`
  border-radius: 6.25rem;
  padding: 0.75rem 1.5rem;
  width: 100%;
  text-decoration: none;
  font-weight: 600;

  ${({ $design }) => {
    switch ($design) {
      case "secondary":
        return css`
          color: ${colors.shade100};
          background: linear-gradient(180deg, #425472 0%, #313e57 100%);

          &:hover,
          &:focus {
            background: linear-gradient(180deg, #586f91 0%, #425472 100%);
          }
          &:active {
            background: linear-gradient(180deg, #334059 0%, #425371 100%);
          }
          &:disabled {
            background: #1a2231;
            color: ${colors.shade50};
            cursor: default;
          }
        `;
      case "primary":
      default:
        return css`
          color: ${colors.shade100};
          background: linear-gradient(180deg, #0ebef0 0%, #0085ff 100%);

          &:hover,
          &:focus {
            background: linear-gradient(180deg, #31c9f4 0%, #2c96f6 100%);
          }
          &:active {
            background: linear-gradient(180deg, #0189fe 0%, #2c96f6 100%);
          }
          &:disabled {
            background: #1a2231;
            color: ${colors.shade50};
            cursor: default;
          }
        `;
    }
  }}
`;
