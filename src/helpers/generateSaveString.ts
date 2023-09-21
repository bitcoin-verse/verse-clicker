import Building from "../classes/Building";
import Player from "../classes/Player";
import { premagic } from "./base64";

const generateSaveString = (player: Player, buildings: Building[]) => {
  let saveString = "";
  saveString += `${player.cookies}|${player.cookieStats.Earned}|${player.cookieStats.Spent}|${player.cookieStats.Clicked}-`;
  let first = true;

  console.log("saving", player, buildings);
  buildings.forEach((building) => {
    if (first) {
      first = false;
      saveString += `${building.amount}|${building.locked}|`;
    } else {
      saveString += `#${building.amount}|${building.locked}|`;
    }
    building.upgrades.forEach((upgrade) => {
      saveString += `${upgrade.owned}:`;
    });
    saveString = saveString.slice(0, -1);
  });
  //   game.saving.saveToCache(premagic(saveString));
  return premagic(saveString);
};

export default generateSaveString;
