import React, { useState, useEffect } from "react";
import { ChatWrapper } from "../styles/chatbox.styled";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatSend from "./ChatSend";
import PopIcon from "./PopIcon";
import Chat_sound from "../../assets/audios/game-sounds/Chat_sound.aac";

const ChatSystem = () => {
  const [socketUrl, setSocketUrl] = useState(
    "wss://api.play-real-tictactoe.cloud/api/ws/chat/" +
      localStorage.getItem("roomCode") +
      "_chat/" +
      localStorage.getItem("symbol") +
      "/"
  );

  const [messageHistory, setMessageHistory] = useState([]);

  // Unseen chats
  const [unseenChatsFromOthers, setUnseenChatsFromOthers] = useState(0);
  const [unseenChatsFromSender, setUnseenChatsFromSender] = useState(0);

  //chat audio
  const [playNewMessageSound, setPlayNewMessageSound] = useState(false);
  const playSound = () => {
    const audio = new Audio(Chat_sound);
    audio.play();
  };


 //chat box is open or not
  const [isSenderChatboxOpen, setIsSenderChatboxOpen] = useState(false);  
  const [isReceiverChatboxOpen, setIsReceiverChatboxOpen] = useState(false);  

  const toggleSenderChatbox = () => {
    setIsSenderChatboxOpen((prevStatus) => !prevStatus);
  };
  const toggleReceiverChatbox = () => {
    setIsReceiverChatboxOpen((prevStatus) => !prevStatus);
  };
  

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 2000,
  });

  useEffect(() => {
    // Whenever a message is received
    if (lastMessage !== null) {
      setMessageHistory((prev) => [...prev, JSON.parse(lastMessage.data)]);

      // To check unseen Chats from others
      const newMessage = JSON.parse(lastMessage.data);
      if (newMessage.from === localStorage.getItem("symbol")) {
     
        setUnseenChatsFromSender((prevCount) => prevCount + 1);
      } else {
        setUnseenChatsFromOthers((prevCount) => prevCount + 1);
        setPlayNewMessageSound(true);
      }
    }
  }, [lastMessage, setMessageHistory]);

  // Function to reset unseenChats to zero
  const markMessagesAsSeen = () => {
    setUnseenChatsFromSender(0);
    setUnseenChatsFromOthers(0);
  };

  useEffect(() => {
    if (playNewMessageSound) {
      playSound();
      // Set the state back to false after playing the sound
      setPlayNewMessageSound(false);
    }
  }, [playNewMessageSound]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    console.log("WebSocket Connection Status:", readyState);
  }, [readyState]);

  return (
    <ChatWrapper>
      <div className="container">
        <PopIcon
          unseenChats={
            localStorage.getItem("symbol") === "sender"
              ? unseenChatsFromSender
              : unseenChatsFromOthers
          }
          isChatboxOpen={
            localStorage.getItem("symbol") === "sender"
            ? isSenderChatboxOpen
            : isReceiverChatboxOpen}
          toggleChatbox={
            localStorage.getItem("symbol") === "sender"
            ? toggleSenderChatbox
            : toggleReceiverChatbox}
            
          onClick={markMessagesAsSeen}
        />

        <div className="chat-popup" id="myForm">
          <ChatHeader />
          <ChatBody messageHistory={messageHistory} />
          <ChatSend sendMessage={sendMessage} />
        </div>
      </div>
    </ChatWrapper>
  );
};

export default ChatSystem;
