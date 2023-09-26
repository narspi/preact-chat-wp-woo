import SocketProvider from "./Provider";
import Chat from "./Chat";

export default function App() {
  return (
    <SocketProvider>
      <Chat />
    </SocketProvider>
  )
}
