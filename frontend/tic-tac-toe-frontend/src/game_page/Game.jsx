
import Board from './board/Board'
import Players from './players/Players'

import React from 'react'
import { GameWrapper } from './styles/game.styled'
import ChatSystem from './chat_system/ChatSystem'

const Game = () => {
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