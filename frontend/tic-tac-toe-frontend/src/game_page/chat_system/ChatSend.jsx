import React, { useState } from "react";
import { ChatSendWrapper } from "../styles/chatsend.styled";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const ChatSend = ({ sendMessage }) => { 
  const [messageInput, setMessageInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (messageInput.trim() !== "") {
      sendMessage(JSON.stringify({
        from: localStorage.getItem("symbol"),
        to: localStorage.getItem("symbol") ==="x"  ? "o": "x",
        msg: messageInput,
      }));

      setMessageInput("");
    }
  };

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent form submission on Enter key
      send(e);
    }
  };
 
  

  return (
    <div className="lower-strip-size">
      <ChatSendWrapper>
        <div className="lower-strip">
          <div className="btn-container">
            <div className="emoji">
              <AddReactionOutlinedIcon className="smile" />
            </div>
          </div>
          <form className="form-container" onSubmit={send}>
            <textarea
              placeholder="Type message.."
              className="msg"
              value={messageInput}
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="btn button">
              <SendOutlinedIcon />
            </button>
          </form>
        </div>
      </ChatSendWrapper>
    </div>
  );
};

export default ChatSend;
