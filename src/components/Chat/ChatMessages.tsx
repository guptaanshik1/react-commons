import { IChatMessage } from "../../utils/data";

interface IProps {
  message: IChatMessage;
}

const ChatMessages = ({ message }: IProps) => {
  return (
    <div style={{ display: "flex", padding: "10px" }}>
      <p>
        {message?.name} - {message?.message}
      </p>
    </div>
  );
};

export default ChatMessages;
