import React from "react";
// import img3 from "../../assets/images/game_page/send.jfif";
import { ChatSendWrapper } from "../styles/chatsend.styled";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const ChatSend = () => {
  return (
    <div className="lower-strip-size">
      <ChatSendWrapper>
        <div className="lower-strip">

          <div className="btn-container">
            <div className="emoji">
              <AddReactionOutlinedIcon className="smile" />
            </div>
          </div>
          <form className="form-container">
            <textarea
              placeholder="Type message.."
              className="msg"
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
