import React, { FC, useEffect, useState } from "react";

import Main from "./views/Main";
import { useAccount, useNetwork } from "wagmi";
import NotConnected from "./views/NotConnected";
import { useDispatch } from "./context/store";
import { useSocketCtx } from "./context/SocketContext";
import useSocketEvents from "./hooks/useSocketEvents";
import { logAmplitudeEvent } from "./helpers/analytics";
import { useWeb3ModalEvents } from "@web3modal/wagmi/react";

const App: FC = () => {
  const dispatch = useDispatch();

  const { socket, isConnected: isSocketConnected } = useSocketCtx();
  const { loading, setLoading } = useSocketEvents();
  const { data: web3ModalEvents } = useWeb3ModalEvents();
  const { chain } = useNetwork();

  const [connectOption, setConnectOption] = useState<string>();

  useEffect(() => {
    console.log(web3ModalEvents);
    switch (web3ModalEvents.event) {
      case "MODAL_OPEN":
        logAmplitudeEvent({
          name: "connect wallet clicked",
          blockchain: chain?.nativeCurrency.symbol,
        });
        break;
      case "SELECT_WALLET":
        setConnectOption(web3ModalEvents.properties.name);
        logAmplitudeEvent({
          name: "connect wallet option selected",
          blockchain: chain?.nativeCurrency.symbol,
          connectOption: web3ModalEvents.properties.name,
        });
        break;

      case "CONNECT_SUCCESS":
        logAmplitudeEvent({
          name: "connect wallet result",
          blockchain: chain?.nativeCurrency.symbol,
          connectOption,
          success: true,
        });
        break;

      case "CONNECT_ERROR":
        logAmplitudeEvent({
          name: "connect wallet result",
          blockchain: chain?.nativeCurrency.symbol,
          connectOption,
          success: false,
        });
        setConnectOption(undefined);
        break;
      default:
        break;
    }
  }, [web3ModalEvents]);

  const { status, address } = useAccount({
    onConnect: ({ address: addr }) => {
      if (!addr) return;
      console.log("Web3 Connected");
      setLoading(false);
    },
    onDisconnect: () => {
      setLoading(true);
      dispatch({ type: "RESET_GAME" });
      console.log("Web3 Disconnected");
    },
  });

  useEffect(() => {
    if (status !== "connected" || !chain) return;
    setLoading(true);

    dispatch({ type: "RESET_GAME" });

    if (
      !(
        chain.name === "Ethereum" ||
        chain.name === "Polygon" ||
        chain.name === "Goerli"
      )
    ) {
      socket.disconnect();
      return;
    }
    dispatch({ type: "SET_NETWORK", payload: chain.name });
    socket.disconnect();
    socket.connect();
  }, [status, chain, address]);

  return (
    <>
      {status !== "connected" || loading || !isSocketConnected ? (
        <NotConnected />
      ) : (
        <Main />
      )}
    </>
  );
};

export default App;
