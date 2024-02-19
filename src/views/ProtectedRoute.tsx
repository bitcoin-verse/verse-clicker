import React, { FC } from "react";
import { useAccount } from "wagmi";

import { useSocketCtx } from "../context/SocketContext";
import useSocketEvents from "../hooks/useSocketEvents";
import NotConnected from "./NotConnected";

const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const { status } = useAccount();
  const { loading } = useSocketEvents();
  const { isConnected: isSocketConnected } = useSocketCtx();

  if (status !== "connected" || loading || !isSocketConnected) {
    return <NotConnected />;
  }

  return children;
};

export default ProtectedRoute;
