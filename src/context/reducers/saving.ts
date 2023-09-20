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

export type LoadSaveAction = { type: "GAME_LOADED"; payload: string };

const loadPlayer = (playerData: string) => {
  const newPlayerData = playerData.split("|");
  return {
    cookies: parseFloat(newPlayerData[0]),
    cookieStats: {
      Earned: parseFloat(newPlayerData[1]),
      Spent: parseFloat(newPlayerData[2]),
      Clicked: parseFloat(newPlayerData[3]),
    },
  };
};

const loadBuildings = (buildingData: string) => {
  const newBuildingData = buildingData.split("#");

  const restoredBuildings = buildings.map((building, index) => {
    const savedBuilding = newBuildingData[index];
    const nonUpgrade = savedBuilding.split("|");
    const savedUpgrades = nonUpgrade[2].split(":");

    const upgrades = building.upgrades.map((upgrade, i) => ({
      ...upgrade,
      ownded: stringToBool(savedUpgrades[i]) || false,
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

export const loadSave = (state: State, payload: string) => {
  // do stuff here to rehydrate the load
  const decoded = magic(payload);

  if (decoded === false) return;

  const saveString = decoded.split("-");

  const player = loadPlayer(saveString[0]);
  const buildings = loadBuildings(saveString[1]);

  // add something about updateShop method in game.ts

  return {
    ...state,
    save: payload,
    pending: false,
    player,
    buildings,
  };
};
