import React, { useState } from "react";
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
  // const [messages, setMessages] = useState([{from:"",to:"",msg:""},{from:"",
  //   to:"",
  //   msg:""},{from:"",
  //   to:"",
  //   msg:""}
  // ]);
  
  // const [socketUrl, setSocketUrl] = useState('wss://api.play-real-tictactoe.cloud/api/ws/chat/localstorage.getitem('roomCode')_chat/x/');
  // const [messageHistory, setMessageHistory] = useState([]);

  // const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  // useEffect(() => { // whenever a message is received
  //   if (lastMessage !== null) {
  //     setMessageHistory((prev) => prev.concat(lastMessage));
  //   }
    `1 lastMessage -> {"from":"koushik", "to":"subhradeep", "msg":"hi"}
    
    var data = convert javascript object JSON.parse
    {
      from:"",to:"",msg:"
    }

    localStorage -> name, symbol, roomcode
    from compare localStorage.getItem(name)

    if matches :
      I have sent it
    else:
      other user
    `
  // }, [lastMessage, setMessageHistory]);

  // const handleClickChangeSocketUrl = useCallback(
  //   () => setSocketUrl('wss://demos.kaazing.com/echo'),
  //   []
  // );

  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState];

  
  // const send = (message)=>{
  //   sendMessage(
  //     JSON.stringify({
  //       from:
  //       to:
  //       message:
  //     })
  //   )
  // }
  return (
    <ChatWrapper>
      <div className="container">
        <PopIcon /> 
        <div className="chat-popup" id="myForm">
            <ChatHeader />
            <ChatBody />
            <ChatSend />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatSystem;
