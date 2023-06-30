import React from "react";
import { ChatWrapper } from "../styles/chatbox.styled";
import img1 from "../../assets/images/game_page/chat.jfif";
// import img2 from "../../assets/images/game_page/close-icon-30.png";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatSend from "./ChatSend";
import PopIcon from "./PopIcon";

// ChatHeader, ChatBody, ChatSend

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -48,
    top: -70,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ChatSystem = () => {
  
  return (
    <ChatWrapper>
      <div className="container">
        {/* <div className="open-button">
        <div className="hello" >
            Let's Chat
        </div>
          <StyledBadge badgeContent={4} color="secondary">
            <img
              src={img1}
              className="open-button"
              onClick={openForm}
              alt="logo"
              style={{ width: 120, height: 110 }}
            />
          </StyledBadge>
        </div> */}
        
        <PopIcon />
        
        
        <div class="chat-popup" id="myForm">
            <ChatHeader />
            <ChatBody />
            <ChatSend />
            
          {/* </form> */}
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatSystem;
