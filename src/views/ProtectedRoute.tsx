import React, { FC, useEffect } from "react";
import { useAccount } from "wagmi";

import { useSocketCtx } from "../context/SocketContext";
import { useTrackedState } from "../context/store";
import { logAmplitudeEvent } from "../helpers/analytics";
import useSocketEvents from "../hooks/useSocketEvents";
import NotConnected from "./NotConnected";

const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const { status, connector } = useAccount();
  const { loading } = useSocketEvents();
  const { isConnected: isSocketConnected } = useSocketCtx();
  const { gameMode } = useTrackedState();

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

  if (status !== "connected" || loading || !isSocketConnected) {
    return <NotConnected />;
  }

  return children;
};

export default ProtectedRoute;
