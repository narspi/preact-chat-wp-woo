import { SocketContext } from "../Provider";
import { useState, useEffect, useContext } from "preact/hooks";

const Body = () => {
  const socket = useContext(SocketContext);

  const [messages, setMessages] = useState<Array<string>>([]);

  useEffect(() => {
    socket.on("initialMessages", (messages) => {
      setMessages(() => messages);
    });
    socket.on("newMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  if (messages.length === 0) {
    return <div className="chat__body">"Нет сообщений"</div>;
  }
  return (
    <div class="chat__body">
      {messages &&
        messages.map((message) => (
          <div className="chat__message" key={message}>
            <div>Анноним</div>
            <div>Message: {message}</div>
          </div>
        ))}
    </div>
  );
};

export default Body;
