import Header from "./components/Header";
import Body from "./components/Body";
import MessageForm from "./components/MessageForm";
import { useEffect, useState } from 'preact/hooks';

export function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const ws = new WebSocket('ws://localhost:3000');
  return (
    <div class="chat">
      <Header />
      <Body messages={messages}/>
      <MessageForm ws={ws}/>
    </div>
  )
}
