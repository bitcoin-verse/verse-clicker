import styled, { css } from "styled-components";

export const Button = styled.button<{
  $size?: "default" | "small" | "tiny";
  $design?: "primary" | "secondary" | "tertiary";
  $fullWidth?: boolean;
}>`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  white-space: nowrap;
  border-radius: 100px;
  font-weight: 600;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "unset")};

  ${({ $design: design, theme }) => {
    switch (design) {
      case "secondary":
        return css`
          color: ${theme.buttons.secondary.text.base};
          background: ${theme.buttons.secondary.background.base};

          &:hover,
          &:focus {
            color: ${theme.buttons.secondary.text.hover};
            background: ${theme.buttons.secondary.background.hover};
          }
          &:active {
            color: ${theme.buttons.secondary.text.active};
            background: ${theme.buttons.secondary.background.active};
          }
          &:disabled {
            color: ${theme.buttons.secondary.text.disabled};
            background: ${theme.buttons.secondary.background.disabled};
            cursor: default;
          }
        `;
      case "tertiary":
        return css`
          color: ${theme.buttons.tertiary.text.base};
          background: ${theme.buttons.tertiary.background.base};

          &:hover,
          &:focus {
            color: ${theme.buttons.tertiary.text.hover};
            background: ${theme.buttons.tertiary.background.hover};
          }
          &:active {
            color: ${theme.buttons.tertiary.text.active};
            background: ${theme.buttons.tertiary.background.active};
          }
          &:disabled {
            color: ${theme.buttons.tertiary.text.disabled};
            background: ${theme.buttons.tertiary.background.disabled};
            cursor: default;
          }
        `;

      case "primary":
      default:
        return css`
          color: ${theme.buttons.primary.text.base};
          background: ${theme.buttons.primary.background.base};

          &:hover,
          &:focus {
            color: ${theme.buttons.primary.text.hover};
            background: ${theme.buttons.primary.background.hover};
          }
          &:active {
            color: ${theme.buttons.primary.text.active};
            background: ${theme.buttons.primary.background.active};
          }
          &:disabled {
            color: ${theme.buttons.primary.text.disabled};
            background: ${theme.buttons.primary.background.disabled};
            cursor: default;
          }
        `;
    }
  }}

  ${({ $size: size }) => {
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
