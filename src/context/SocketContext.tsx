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

export interface SocketCtxState {
  socket: Socket;
  isConnected: boolean;
}

export const SocketCtxContext = createContext<SocketCtxState>(
  {} as SocketCtxState,
);

export const useSocketCtx = () => useContext(SocketCtxContext);

const SocketCtxProvider: FC<PropsWithChildren> = ({ children }) => {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const socketRef = useRef(
    io("https://verse-clicker-server.fly.dev/", {
      autoConnect: false,
    }),
  );

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      if (!chain || !address) return;

      socketRef.current.emit("join", { address, chain: chain.name });
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onError = (e: unknown) => {
      console.log(e);
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
  }, [address]);

  return (
    <SocketCtxContext.Provider
      value={{ socket: socketRef.current, isConnected }}
    >
      {children}
    </SocketCtxContext.Provider>
  );
};

export default SocketCtxProvider;
