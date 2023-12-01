import { NetworkName } from "../context/reducers/network";

import verseMoon from "../assets/verse-moon.png";
import polygonMoon from "../assets/verse-polygon-moon.png";

export const getMoonImage = (network: NetworkName) => {
  switch (network) {
    case "Polygon":
      return polygonMoon;
    case "Ethereum":
    case "Goerli":
    default:
      return verseMoon;
  }
};
