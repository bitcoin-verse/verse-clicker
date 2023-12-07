import "styled-components";
import { NetworkName } from "../../context/reducers/network";
import { Ethereum } from "./Ethereum";
import { Goerli } from "./Goerli";
import { Polygon } from "./Polygon";
import { Christmas } from "./Christmas";

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

export const themes: Record<NetworkName, typeof Ethereum> = {
  Goerli,
  Ethereum,
  Polygon,
  Christmas,
};

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
