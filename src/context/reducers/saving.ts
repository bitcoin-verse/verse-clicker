import Building from "../../classes/Building";
import Player from "../../classes/Player";
import Upgrade from "../../classes/Upgrade";
import { magic } from "../../helpers/base64";
import { stringToBool } from "../../helpers/stringToBool";
import buildings from "../buildings";
import { State } from "../store";

export type GameSavedAction = { type: "GAME_SAVED"; payload: string };

export const gameSaved = (state: State, save: string) => {
  return {
    ...state,
    save,
    pending: false,
  };
};

export type LoadSaveAction = {
  type: "GAME_LOADED";
  payload: { base64: string; lastSave: string };
};

const loadPlayer = (player: Player, playerData: string): Player => {
  const newPlayerData = playerData.split("|");
  return {
    ...player,
    cookies: parseFloat(newPlayerData[0]),
    cookieStats: {
      Earned: parseFloat(newPlayerData[1]),
      Spent: parseFloat(newPlayerData[2]),
      Clicked: parseFloat(newPlayerData[3]),
    },
  };
};

const loadBuildings = (buildingData: string): Building[] => {
  const newBuildingData = buildingData.split("#");

  const restoredBuildings = buildings.map((building, index) => {
    const savedBuilding = newBuildingData[index];
    const nonUpgrade = savedBuilding.split("|");
    const savedUpgrades = nonUpgrade[2].split(":");

    const upgrades: Upgrade[] = building.upgrades.map((upgrade, i) => ({
      ...upgrade,
      owned: stringToBool(savedUpgrades[i]) || false,
    }));

    return {
      ...building,
      amount: parseFloat(nonUpgrade[0]),
      locked: stringToBool(nonUpgrade[1]) || false,
      upgrades,
    };
  });

  return restoredBuildings;
};

export const loadSave = (
  state: State,
  payload: LoadSaveAction["payload"],
): State => {
  const decoded = magic(payload.base64);

  if (decoded === false) return state;

  const saveString = decoded.split("-");

  const player = loadPlayer(state.player, saveString[0]);
  const buildings = loadBuildings(saveString[1]);

  // add something about updateShop method in game.ts

  return {
    ...state,
    save: payload.base64,
    lastSave: payload.lastSave,
    pending: false,
    player,
    buildings,
  };
};
