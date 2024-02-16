import React, { FC, Suspense, lazy, useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";

import { CURRENT_CAMPAIGN } from "./constants";
import { useSocketCtx } from "./context/SocketContext";
import { GameMode } from "./context/reducers/network";
import { useDispatch, useTrackedState } from "./context/store";
import { logAmplitudeEvent } from "./helpers/analytics";
import { getGameMode } from "./helpers/gameMode";
import useCampaignInfo from "./hooks/useCampaignInfo";
import useSocketEvents from "./hooks/useSocketEvents";

const Main = lazy(() => import("./views/Main"));
const NotConnected = lazy(() => import("./views/NotConnected"));

const App: FC = () => {
  useCampaignInfo();

  const dispatch = useDispatch();

  const { socket, isConnected: isSocketConnected } = useSocketCtx();
  const { loading, setLoading } = useSocketEvents();

  const { chain } = useNetwork();

  const { gameMode } = useTrackedState();

  const { status, address, connector } = useAccount({
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
    // setting the campaign query to match game mode
    const search = new URLSearchParams(location.search);
    const campaignQuery = search.get("campaign");

    const newGameMode = getGameMode(campaignQuery);
    if (
      !campaignQuery ||
      campaignQuery !== gameMode ||
      newGameMode !== gameMode
    ) {
      search.set("campaign", gameMode);
      const url = `${window.location.origin}${window.location.pathname}?${search}`;
      window.history.pushState("", "", url);
    }

    if (status !== "connected" || !chain) return;

    setLoading(true);
    dispatch({ type: "RESET_GAME" });

    if (gameMode !== CURRENT_CAMPAIGN && gameMode !== chain.name) {
      console.log("Setting game mode", newGameMode, gameMode);
      dispatch({ type: "SET_GAME_MODE", payload: chain.name as GameMode });
      socket.disconnect();
      return;
    }

    if (
      !(
        chain.name === "Ethereum" ||
        chain.name === "Polygon" ||
        chain.name === "Goerli" ||
        chain.name === "Sepolia"
      )
    ) {
      console.log("Wrong chain", chain.name);
      socket.disconnect();
      return;
    }

    socket.disconnect();
    socket.connect();
  }, [status, chain, address, gameMode]);

  useEffect(() => {
    if (status === "connected" && !loading) {
      logAmplitudeEvent({
        name: "connect wallet result",
        blockchain: gameMode,
        connectOption: connector.name,
        success: true,
      });
    }
  }, [status, loading]);

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
