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

export interface SocketCtxState {
  socket: Socket;
  isConnected: boolean;
}

export const SocketCtxContext = createContext<SocketCtxState>(
  {} as SocketCtxState,
);

export const useSocketCtx = () => useContext(SocketCtxContext);

const SocketCtxProvider: FC<PropsWithChildren> = ({ children }) => {
  const socketRef = useRef(
    io("http://localhost:3001", {
      autoConnect: false,
    }),
  );

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    // socketRef.current.connect();
    socketRef.current.on("connect", onConnect);
    socketRef.current.on("disconnect", onDisconnect);

    return () => {
      socketRef.current.off("connect", onConnect);
      socketRef.current.off("disconnect", onDisconnect);

      socketRef.current.disconnect();
    };
  }, []);

  return (
    <SocketCtxContext.Provider
      value={{ socket: socketRef.current, isConnected }}
    >
      {children}
    </SocketCtxContext.Provider>
  );
};

export default SocketCtxProvider;
