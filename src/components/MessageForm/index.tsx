import { useState } from "preact/hooks";

const MessageForm = ({socket}) => {
  const [value, setValue] = useState("");
  const sendMessageFoo = (event) => {
    event.preventDefault();
    if (value) {
      setValue("");
      socket.emit('sendMessage', value);
    }
  };

  const changeValueFoo = (event) => {
    setValue(event.target.value);
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
