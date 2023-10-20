import styled, { css } from "styled-components";
import { colors } from "./colors";

export const Button = styled.button<{
  size?: "default" | "small" | "tiny";
  design?: "primary" | "secondary" | "tertiary";
}>`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  text-wrap: nowrap;
  border-radius: 100px;
  font-weight: 600;

  ${({ design }) => {
    switch (design) {
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
      case "tertiary":
        return css`
          color: ${colors.shade90};
          background: #1a2231;

          &:hover,
          &:focus {
            color: ${colors.shade100};
            background: #313e57;
          }
          &:active {
            color: ${colors.shade100};
            background: #252d40;
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

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 14px;
          height: 36px;
          padding: 0px 16px;
        `;
      case "tiny":
        return css`
          font-size: 12px;
          height: 24px;
          padding: 0px 12px;
        `;
      case "default":
      default:
        return css`
          font-size: 18px;
          height: 48px;
          padding: 0px 24px;
        `;
    }
  }}
`;
