import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

const url = process.env.DB_CONN_STRING || "";

export const dbClient = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
