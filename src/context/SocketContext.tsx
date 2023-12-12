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
import { GameMode } from "./reducers/network";

export interface SocketCtxState {
  socket: Socket;
  isConnected: boolean;
}

export const SocketCtxContext = createContext<SocketCtxState>(
  {} as SocketCtxState,
);

export const useSocketCtx = () => useContext(SocketCtxContext);

const activeCampaigns: GameMode[] = ["Christmas"];

const SocketCtxProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { gameMode } = useTrackedState();

  const socketRef = useRef(
    io(process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001", {
      autoConnect: false,
    }),
  );

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      if (!chain || !address) return;
      console.log("socket connected");
      console.log(chain.name, gameMode);
      if (!activeCampaigns.includes(gameMode)) {
        dispatch({ type: "RESET_GAME" });
        dispatch({ type: "SET_GAME_MODE", payload: chain.name as GameMode });
      }
      socketRef.current.emit("join", { address, chain: gameMode });
    };

    const onDisconnect = (e: unknown) => {
      setIsConnected(false);
      console.log("socket disconnected", e);
    };

    const onError = (e: unknown) => {
      console.log("socket error", e);
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
      socketRef.current.off("connect", onConnect);
      socketRef.current.off("disconnect", onDisconnect);
      socketRef.current.off("connect_error", onError);

      socketRef.current.disconnect();
    };
  }, [address, chain, gameMode]);

  return (
    <SocketCtxContext.Provider
      value={{ socket: socketRef.current, isConnected }}
    >
      {children}
    </SocketCtxContext.Provider>
  );
};

export default SocketCtxProvider;
