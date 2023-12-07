import React, { FC, useEffect } from "react";

import Main from "./views/Main";
import { useAccount, useNetwork } from "wagmi";
import NotConnected from "./views/NotConnected";
import { useDispatch, useTrackedState } from "./context/store";
import { useSocketCtx } from "./context/SocketContext";
import useSocketEvents from "./hooks/useSocketEvents";
import useAmplitudeEvents from "./hooks/useAmplitudeEvents";
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
        chain.name === "Goerli"
      )
    ) {
      socket.disconnect();
      return;
    }

    if (gameMode !== "Christmas") {
      dispatch({
        type: "SET_GAME_MODE",
        payload: chain.name,
      });
    }
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
