import React, { FC, PropsWithChildren } from "react";

import SocketCtxProvider from "./SocketContext";
import Web3Provider from "./Web3Provider";
import { ContextProvider } from "./store";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContextProvider>
      <Web3Provider>
        <SocketCtxProvider>{children}</SocketCtxProvider>
      </Web3Provider>
    </ContextProvider>
  );
};

export default RootProvider;
