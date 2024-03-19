import "styled-components";

import { GameMode } from "../../context/reducers/network";
import { Ethereum } from "./Ethereum";
import { Polygon } from "./Polygon";
import { Sepolia } from "./Sepolia";

type ButtonTheme = {
  background: {
    base: string;
    hover: string;
    active: string;
    disabled: string;
  };
  text: {
    base: string;
    hover: string;
    active: string;
    disabled: string;
  };
};

export type CustomTheme = {
  moon: string;
  halfMoon: string;
  background: string;
  buttons: {
    primary: ButtonTheme;
    secondary: ButtonTheme;
    tertiary: ButtonTheme;
  };
};

export const themes: Record<GameMode, typeof Ethereum> = {
  Ethereum,
  Polygon,
  Sepolia,
};

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
