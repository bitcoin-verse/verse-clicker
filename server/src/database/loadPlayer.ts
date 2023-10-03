import { dbClient } from "./database";
import PlayerClass from "./interfaces/PlayerInterface";

const loadPlayer = async (address: string, roomName: string) => {
  try {
    await dbClient.connect();
    const db = dbClient.db("clickerDB");

    const collection = db.collection<PlayerClass>("players");

    const result = await collection
      .find({ address, roomName })
      .sort({ updatedAt: -1 })
      .limit(1)
      .toArray();

    return result[0];
  } catch (error) {
    console.log("Error loading player", error);
  } finally {
    // await dbClient.close();
  }
};

export default loadPlayer;
