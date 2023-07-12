
import Board from './board/Board'
import Players from './players/Players'

import React, { useState } from 'react'
import { GameWrapper } from './styles/game.styled'
import ChatSystem from './chat_system/ChatSystem'

const Game = () => {
    // let roomCode = localStorage.getItem(roomCode)
    // let name = localStorage.getItem('name')
    // const [leftClient, setLeftClient] = useState("")
    // const [rightClient, setRightClient] = useState("")

    `
    const [socketUrl, setSocketUrl] = useState('wss://api.play-real-tictactoe.cloud/api/ws/seconduser/{roomCode}/Subhradeep/');
    const [messageHistory, setMessageHistory] = useState([]);
  
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  
    useEffect(() => {
      if (lastMessage !== null) {
        setMessageHistory((prev) => prev.concat(lastMessage));
      }



      lastMessage ->
      {"group_name": "94843e3be49c4dfb9a115f3f4abf72fb",
      "first_client": "Subhradeep",
      "second_client": "koushik"}


      const data = JSON.parse(lastMessage)
      {group_name: "94843e3be49c4dfb9a115f3f4abf72fb",
      first_client: "Subhradeep",
      second_client: "koushik"}

      if localStorage.getItem("name")==data.first_client:
        leftClient = data.first_client
      else if: data.second_client == null:
        rightClient = "waiting..."
      else:
        





    }, [lastMessage, setMessageHistory]);
  


    `
    return (
        <>
            <GameWrapper>
            <ChatSystem/>
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
                    Room Code: <br/> {localStorage.getItem("roomCode")}
                </div>
                    <div className="upper">
                    <div className='player'>
                        <Players/>
                    </div>
                    <div className='board'>
                        <Board />
                    </div>
                    <div className='player'>
                        <Players/>
                    </div>
                </div>
                <div className='bottom'>
                
                    <div className='player2'>
                    <Players/>
                    </div>
                    <div className='player2'>
                    <Players/>
                    </div>
                </div>
                </div>
            </GameWrapper>
           
        </>
    )

}

export default Game