import Header from "./components/Header";
import Body from "./components/Body";
import MessageForm from "./components/MessageForm";
import { useEffect, useState, useRef } from 'preact/hooks';
import { io } from "socket.io-client";

export function App() {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(io('ws://localhost:3000',{
    transports: ['websocket']
  }));
  const socket = socketRef.current;
  useEffect(()=>{
    socket.on('initialMessages', (initialMessages) => {
      setMessages(initialMessages);
    });

    socket.on('newMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.disconnect();
    };
  },[])
  return (
    <div class="chat">
      <Header />
      <Body messages={messages}/>
      <MessageForm socket={socket}/>
    </div>
  )
}
