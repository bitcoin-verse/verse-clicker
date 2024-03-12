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
  socket: Socket;
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

  const socketRef = useRef(
    io(process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001", {
      autoConnect: false,
    }),
  );

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const onConnect = () => {
      if (!chain || !address) return;

      socketRef.current.emit("join", {
        address,
        chain: gameMode,
        uuid: sign[address].uuid,
        signature: sign[address].signature,
      });
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
    if (!address || !sign[address]) {
      setIsConnected(false);
      dispatch({ type: "RESET_GAME" });
      console.log("Socket disconnected");
    }
    socketRef.current.on("connect", onConnect);
    socketRef.current.on("disconnect", onDisconnect);
    socketRef.current.on("connect_error", onError);
    return () => {
      socketRef.current.off("connect", onConnect);
      socketRef.current.off("disconnect", onDisconnect);
      socketRef.current.off("connect_error", onError);

      socketRef.current.disconnect();
    };
  }, [address, chain, gameMode, sign]);

  return (
    <SocketCtxContext.Provider
      value={{ socket: socketRef.current, isConnected }}
    >
      {children}
    </SocketCtxContext.Provider>
  );
};

export default SocketCtxProvider;
