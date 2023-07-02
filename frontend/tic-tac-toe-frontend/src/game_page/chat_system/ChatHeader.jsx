import React from "react";
import img4 from "../../assets/images/game_page/download.png";
import { ChatHeadWrapper } from "../styles/chatheader.styled";
import MessageIcon from "@mui/icons-material/Message";
import img2 from "../../assets/images/game_page/close-icon-30.png";

const ChatHeader = () => {
  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  };

  return (
    <div>
      <ChatHeadWrapper>
        <div className="strip">
          <div className="heading">
           
            <div className="icon">
              <MessageIcon />
            </div>
            <h2 className="head-text">ChitChat</h2>
          </div>
          <div className="close">
            <img src={img2} alt="" className="cancel" onClick={closeForm} /> 
          </div>
        </div>
      </ChatHeadWrapper>
    </div>
  );
};

export default ChatHeader;