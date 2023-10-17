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

const projectId = "1184cb8e8109ec7c4a9425c56b494e5e";

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
      options: {
        projectId,
        showQrModal: false,
        metadata,
        // relayUrl: "wss://walletconnect-v2.ops.bitcoin.com",
      },
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
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,

  featuredWalletIds: [
    "107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c",
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
  ],
});

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
