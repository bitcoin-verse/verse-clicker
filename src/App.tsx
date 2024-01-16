import React, { FC, Suspense, lazy, useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";

import { useSocketCtx } from "./context/SocketContext";
import { useDispatch, useTrackedState } from "./context/store";
import useAmplitudeEvents from "./hooks/useAmplitudeEvents";
import useSocketEvents from "./hooks/useSocketEvents";

const Main = lazy(() => import("./views/Main"));
const NotConnected = lazy(() => import("./views/NotConnected"));

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
    <Suspense>
      {status !== "connected" || loading || !isSocketConnected ? (
        <NotConnected />
      ) : (
        <Main />
      )}
    </Suspense>
  );
};

export default App;
