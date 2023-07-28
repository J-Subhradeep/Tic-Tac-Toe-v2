import Board from "./board/Board";
import Players from "./players/Players";
import React, { useState } from "react";
import { GameWrapper } from "./styles/game.styled";
import ChatSystem from "./chat_system/ChatSystem";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Winner from "../results_page/Winner";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Game = () => {
    let roomCode = localStorage.getItem("roomCode");
    let username = localStorage.getItem("name");
    const [leftClient, setLeftClient] = useState("");
    const [rightClient, setRightClient] = useState("");
    const [flag, setFlag] = useState(true);
    const navigate = useNavigate();

    function copyText() {
        const content = roomCode
        navigator.clipboard.writeText(content);
    }

    const [socketUrl, setSocketUrl] = useState(
        "wss://api.play-real-tictactoe.cloud/api/ws/seconduser/" +
        roomCode + "/" + username + "/"
    );
    const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 10,
        reconnectInterval: 2000,
    });

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
            }
            else if (localStorage.getItem("name") === clientData.second_client) {
                setLeftClient(clientData.second_client);
                setRightClient(clientData.first_client);

            }
            if (clientData.second_client === false) {
              setRightClient("Disconnected");
              setFlag(false);
              setTimeout(()=>{
                navigate('/result',{
                  state:{
                    winner:true
                  },
                })
              },3000)
            }
        }
    }, [lastMessage, setMessageHistory]);

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
          {/* {!flag ? (<Alert severity="info">Opponent Disconnected!</Alert>) : ''} */}
        </GameWrapper>
      ) : (
        <>
          <Alert
            severity="info"
            style={{
              width: "fit-content",
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            Your Opponent got Disconnected!
          </Alert>
          {/* <Winner /> */}
        </>
      )}
    </>
  );
};

export default Game;