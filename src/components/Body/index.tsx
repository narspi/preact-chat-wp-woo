const Body = () => {
  if ([].length === 0) {
    return <>"Нет сообщений"</>;
  }
  return (
    <div class="chat__body">
      {[] &&
        [].map((message) => (
          <div className="chat__message" key={message}>
            <div>Анноним</div>
            <div>Message: {message}</div>
          </div>
        ))}
    </div>
  );
};

export default Body;
