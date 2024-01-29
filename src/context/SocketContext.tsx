import React, {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Socket, io } from "socket.io-client";
import { useAccount, useNetwork } from "wagmi";

import { useDispatch, useTrackedState } from "./store";

export interface SocketCtxState {
  socket?: Socket;
  isConnected: boolean;
}

export const SocketCtxContext = createContext<SocketCtxState>(
  {} as SocketCtxState,
);

export const useSocketCtx = () => useContext(SocketCtxContext);

const SocketCtxProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const {
    gameMode,
    settings: { sign },
  } = useTrackedState();
  const search = new URLSearchParams();
  const campaign = search.get("campaign");

  const socketRef = useRef<Socket>();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!sign?.signature || !sign?.uuid) {
      return;
    }

    socketRef.current = io(
      process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001",
      {
        autoConnect: false,
        query: { uuid: sign.uuid, signature: sign.signature, address },
      },
    );
  }, [sign]);

  useEffect(() => {
    if (!socketRef.current) return;

    const onConnect = () => {
      if (!chain || !address || !socketRef.current) return;

      socketRef.current.emit("join", { address, chain: gameMode });
      setIsConnected(true);
      dispatch({ type: "SET_ERROR" });
      console.log("Socket connected", chain.name, gameMode);
    };

    const onDisconnect = (e: unknown) => {
      setIsConnected(false);
      dispatch({ type: "RESET_GAME" });
      console.log("Socket disconnected", e);
    };

    const onError = (e: unknown) => {
      console.log("Socket error", e);
      dispatch({
        type: "SET_ERROR",
        payload: "Error Connecting to server, try again later",
      });
    };

    // socketRef.current.connect();
    socketRef.current.on("connect", onConnect);
    socketRef.current.on("disconnect", onDisconnect);
    socketRef.current.on("connect_error", onError);
    return () => {
      if (!socketRef.current) return;
      socketRef.current.off("connect", onConnect);
      socketRef.current.off("disconnect", onDisconnect);
      socketRef.current.off("connect_error", onError);

      socketRef.current.disconnect();
    };
  }, [address, chain, gameMode, sign?.signature, sign?.uuid, socketRef]);

  return (
    <SocketCtxContext.Provider
      value={{ socket: socketRef.current, isConnected }}
    >
      {children}
    </SocketCtxContext.Provider>
  );
};

export default SocketCtxProvider;
