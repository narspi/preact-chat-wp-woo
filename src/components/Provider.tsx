import { createContext, ComponentChildren } from "preact";
import { Socket } from "socket.io-client";
import { socket } from "../socket";

export const SocketContext = createContext<Socket>(socket);

interface SocketProviderInterface {
  children: ComponentChildren;
}

function SocketProvider({ children }: SocketProviderInterface) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
