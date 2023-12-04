import "styled-components";
import { NetworkName } from "../context/reducers/network";

import verseMoon from "../assets/verse-moon.png";
import polygonMoon from "../assets/verse-polygon-moon.png";

type CustomTheme = {
  moon: string;
  background: string;
};

export const Ethereum: CustomTheme = {
  moon: verseMoon,
  background: "linear-gradient(180deg, #020A10 0%, #10518D 100%)",
};

export const Goerli: CustomTheme = {
  moon: verseMoon,
  background: "#030c14",
};

export const Polygon: CustomTheme = {
  moon: polygonMoon,
  background: "linear-gradient(to top, #030C14 50%, #8F58E7 100%)",
};

export const themes: Record<NetworkName, typeof Ethereum> = {
  Goerli,
  Ethereum,
  Polygon,
};

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
