/// <reference types="react-scripts" />

declare module ".*wav";

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    REACT_APP_LITE_MODE: "true" | "false";
    PUBLIC_URL: string;
    REACT_APP_PUBLIC_URL: string;
    REACT_APP_VERSE_BASE_URL: string;
    REACT_APP_DEV_ENV: string;
    REACT_APP_GOERLI_NODE_HTTP_URL: string;
    REACT_APP_GOERLI_NODE_WSS_URL: string;
    REACT_APP_SEPOLIA_NODE_HTTP_URL: string;
    REACT_APP_SEPOLIA_NODE_WSS_URL: string;
    REACT_APP_POLYGON_NODE_HTTP_URL: string;
    REACT_APP_POLYGON_NODE_WSS_URL: string;
    REACT_APP_ETHEREUM_NODE_HTTP_URL: string;
    REACT_APP_ETHEREUM_NODE_WSS_URL: string;
  }
}
