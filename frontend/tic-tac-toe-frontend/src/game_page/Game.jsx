import Board from './board/Board'
import Players from './players/Players'

import React from 'react'
import Button from '@mui/material/Button';

import { GameWrapper } from './styles/game.styled'
import ChatSystem from './chat_system/ChatSystem'

const Game = () => {

    function copyText() {
        const content = localStorage.getItem('roomCode');
        navigator.clipboard.writeText(content);
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

}

export default Game