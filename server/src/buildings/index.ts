import Building from "../classes/Building";
import { RoomName } from "../classes/Room";
import ethereumBuildings from "./ethereum";
import goerliBuildings from "./goerli";
import poligonBuildings from "./polygon";

export default {
  Ethereum: ethereumBuildings,
  Goerli: goerliBuildings,
  Polygon: poligonBuildings,
} as Record<RoomName, Building[]>;
