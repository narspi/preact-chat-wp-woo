import { useState,useContext  } from "preact/hooks";
import { SocketContext } from '../Provider'; 

const MessageForm = () => {
  const [value, setValue] = useState<string>("");
  const socket = useContext(SocketContext);


  const sendMessageFoo = (event:Event) => {
    event.preventDefault();
    if (value) {
      socket.emit('sendMessage', value);
      setValue("");
    }
  };

  const changeValueFoo = (event:Event) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
  };

  return (
    <form class="chat__form" onSubmit={sendMessageFoo}>
      <input
        class="chat__message-input"
        value={value}
        onInput={changeValueFoo}
      />
      <button type="submit" class="chat__message-btn">
        send
      </button>
    </form>
  );
};

export default MessageForm;
