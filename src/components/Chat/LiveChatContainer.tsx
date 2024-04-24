import { useEffect, useRef, useState } from "react";
import { IChatMessage } from "../../utils/data";
import ChatMessages from "./ChatMessages";
import { generateRandomName } from "../../utils/randomNameGenerator";
import { generateRandomMessage } from "../../utils/generateRandomMessage";

const LiveChatContainer = () => {
  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const liveMessageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setMessages((prev) => {
        return [
          ...prev,
          {
            id: messages[messages.length - 1]?.id + 1,
            name: generateRandomName(),
            message: generateRandomMessage(20),
          },
        ];
      });
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const addMessage = () => {
    setMessages((prev) => {
      return [
        ...prev,
        {
          id: messages[messages?.length - 1].id + 1,
          name: "Anshik Gupta",
          message: liveMessageRef.current?.value!,
        },
      ];
    });
  };

  return (
    <>
      <div
        style={{
          border: "1px solid red",
          width: "400px",
          height: "500px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {messages?.map((message) => (
          <ChatMessages key={message?.id} message={message} />
        ))}
      </div>
      <div style={{ display: "flex", padding: "20px" }}>
        <input ref={liveMessageRef} />
        <button onClick={addMessage}>Send</button>
      </div>
    </>
  );
};

export default LiveChatContainer;
