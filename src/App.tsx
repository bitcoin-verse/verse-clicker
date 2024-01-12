import React, { FC, useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";

import { useSocketCtx } from "./context/SocketContext";
import { useDispatch, useTrackedState } from "./context/store";
import useAmplitudeEvents from "./hooks/useAmplitudeEvents";
import useSocketEvents from "./hooks/useSocketEvents";
import Main from "./views/Main";
import NotConnected from "./views/NotConnected";

const App: FC = () => {
  useAmplitudeEvents();

  const dispatch = useDispatch();

  const { socket, isConnected: isSocketConnected } = useSocketCtx();
  const { loading, setLoading } = useSocketEvents();

  const { chain } = useNetwork();
  const { gameMode } = useTrackedState();

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
        chain.name === "Goerli" ||
        chain.name === "Sepolia"
      )
    ) {
      socket.disconnect();
      return;
    }

    socket.disconnect();
    socket.connect();
  }, [status, chain, address, gameMode]);

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
