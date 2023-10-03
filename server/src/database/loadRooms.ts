import { RoomName } from "../classes/Room";
import { dbClient } from "./database";
import PlayerClass from "./interfaces/PlayerInterface";

export const loadRoomPlayers = async (roomName: RoomName) => {
  try {
    await dbClient.connect();

    const db = dbClient.db("clickerDB");

    const collection = db.collection<PlayerClass>("players");

    const result = await collection
      .find({ roomName }, { sort: { Earned: 1 } })
      .toArray();

    return result;
  } catch (error) {
    console.log("Error loading rooms", error);
  } finally {
    // await dbClient.close();
  }
};
