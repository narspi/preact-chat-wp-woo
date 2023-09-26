import { createContext,ComponentChildren } from "preact";
//import { useContext,useEffect,useState } from "preact/hooks";
import { Socket } from "socket.io-client";
import {socket} from '../socket';

export const SocketContext = createContext<Socket | null>(null);

interface SocketProviderInterface {
    children: ComponentChildren
}

function SocketProvider({ children }: SocketProviderInterface) {
    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    );
}

export default SocketProvider;