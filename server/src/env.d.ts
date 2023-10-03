declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONN_STRING: string;
      DB_NAME: string;
      ROOMS_COLLECTION_NAME: string;
      NODE_ENV: "development" | "production";
      PORT: number;
      INFURA_API_KEY: string;
    }
  }
}

export {};
