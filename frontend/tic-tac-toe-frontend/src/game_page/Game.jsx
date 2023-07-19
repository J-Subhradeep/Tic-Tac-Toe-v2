import Board from "./board/Board";
import Players from "./players/Players";
import React, { useState } from "react";
import { GameWrapper } from "./styles/game.styled";
import ChatSystem from "./chat_system/ChatSystem";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const Game = () => {
  let roomCode = localStorage.getItem("roomCode");
  let username = localStorage.getItem("name");
  const [leftClient, setLeftClient] = useState("");
  const [rightClient, setRightClient] = useState("");

  const [socketUrl, setSocketUrl] = useState(
    "wss://api.play-real-tictactoe.cloud/api/ws/seconduser/" +
      roomCode +"/" + username + "/"
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null){
      setMessageHistory((prev) => prev.concat(lastMessage));
      const clientData = JSON.parse(lastMessage.data);
      if (localStorage.getItem("name") == clientData.first_client) {
        setLeftClient(clientData.first_client);
        setRightClient(clientData.second_client);
      }
      if (clientData.second_client === null) {
        setRightClient("Waiting...");
      } 
      else if (localStorage.getItem("name") === clientData.second_client) {
        setLeftClient(clientData.second_client);
        setRightClient(clientData.first_client);
      }
    }
  }, [lastMessage, setMessageHistory]);


  return (
    <>
      <GameWrapper>
        <ChatSystem />
        <div className="wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="banner">
          <div className="room-code">
            Room Code: <br /> {localStorage.getItem("roomCode")}
          </div>
          <div className="upper">
            <div className="player">
              <Players name={leftClient} />
            </div>
            <div className="board">
              <Board />
            </div>
            <div className="player">
              <Players name={rightClient} />
            </div>
          </div>
          <div className="bottom">
            <div className="player2">
              <Players name={leftClient} />
            </div>
            <div className="player2">
              <Players name={rightClient} />
            </div>
          </div>
        </div>
      </GameWrapper>
    </>
  );
};

export default Game;
