import Board from "./board/Board";
import Players from "./players/Players";
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { GameWrapper } from "./styles/game.styled";
import ChatSystem from "./chat_system/ChatSystem";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { EightMp } from "@mui/icons-material";
import Winner from "../results_page/Winner";

const Game = () => {
  let roomCode = localStorage.getItem("roomCode");
  let username = localStorage.getItem("name");
  const [leftClient, setLeftClient] = useState("");
  const [rightClient, setRightClient] = useState("");
  const [flag, setFlag] = useState(true);

  const [socketUrl, setSocketUrl] = useState(
    "wss://api.play-real-tictactoe.cloud/api/ws/seconduser/" +
      roomCode +
      "/" +
      username +
      "/"
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 2000,
  });
  
  const Game = () => {

    function copyText() {
        const content = localStorage.getItem('roomCode');
        navigator.clipboard.writeText(content);
    }

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      const clientData = JSON.parse(lastMessage.data);
      if (localStorage.getItem("name") == clientData.first_client) {
        setLeftClient(clientData.first_client);
        setRightClient(clientData.second_client);
      }
      if (clientData.second_client === null) {
        setRightClient("Waiting...");
      } else if (localStorage.getItem("name") === clientData.second_client) {
        setLeftClient(clientData.second_client);
        setRightClient(clientData.first_client);
      }
      if (clientData.second_client === false) {
        setRightClient("Disconnected");
        setFlag(false);
      }

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
                    <div className='room-code'>
                        <Button onClick={copyText} variant="outlined">Copy Room Code</Button>
                    </div>
                    <div className="upper">
                        <div className='player'>
                            <Players />
                        </div>
                        <div className='board'>
                            <Board />
                        </div>
                        <div className='player'>
                            <Players />
                        </div>
                    </div>
                    <div className='bottom'>

                        <div className='player2'>
                            <Players />
                        </div>
                        <div className='player2'>
                            <Players />
                        </div>
                    </div>
                </div>
            </GameWrapper>

        </>
    )

  return (
    <>
      {flag ? (
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
            <div className='room-code'>
                        <Button onClick={copyText} variant="outlined">Copy Room Code</Button>
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
      ) : (
        <Winner />
      )}
    </>
  );
};

export default Game