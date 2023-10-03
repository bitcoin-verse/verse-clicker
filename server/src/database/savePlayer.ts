import Player from "../classes/Player";
import { RoomName } from "../classes/Room";
import { dbClient } from "./database";
import PlayerClass from "./interfaces/PlayerInterface";

const savePlayer = async (player: Player, roomName: RoomName) => {
  try {
    await dbClient.connect();

    const db = dbClient.db("clickerDB");
    const collection = db.collection<PlayerClass>("players");

    await collection.createIndex({ address: 1, roomName: 1 });
    const result = await collection.updateOne(
      { address: player.address, roomName },
      { $set: new PlayerClass(player, roomName) },
      { upsert: true },
    );

    if (result.acknowledged) {
      console.log("Player Saved", player.address);
    }
  } catch (error) {
    console.log("Error Saving player", error);
  } finally {
    // await dbClient.close();
  }
};

export default savePlayer;
