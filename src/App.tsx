import React, { FC } from "react";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygon } from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { infuraProvider } from "wagmi/providers/infura";

import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ContextProvider } from "./context/store";

import SocketCtxProvider from "./context/SocketContext";
import Main from "./views/Main";

const projectId = "8000cda0f00ad8e06049c5e030ddaa4c";

const metadata = {
  name: "VERSE Clicker",
  description: "VERSE Clicker",
  url: "https://clicker.verse.bitcoin.com",
  icons: ["https://verse.bitcoin.com/images/favicon.png"],
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, goerli],
  [
    infuraProvider({
      apiKey: "1f47d876b0094053881ae761371be771",
    }),
  ],
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata },
    }),
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});
createWeb3Modal({ wagmiConfig, projectId, chains });

const App: FC = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SocketCtxProvider>
        <ContextProvider>
          <Main />
        </ContextProvider>
      </SocketCtxProvider>
    </WagmiConfig>
  );
};

export default App;
