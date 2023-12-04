import verseMoon from "../assets/verse-moon.png";
import polygonMoon from "../assets/verse-polygon-moon.png";
import "styled-components";
import { NetworkName } from "../context/reducers/network";

export const Ethereum = {
  moon: verseMoon,
} as const;

export const Goerli = {
  moon: verseMoon,
} as const;

export const Polygon = {
  moon: polygonMoon,
} as const;

export const themes: Record<NetworkName, typeof Ethereum> = {
  Goerli,
  Ethereum,
  Polygon,
};

type CustomTheme = typeof Ethereum;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
