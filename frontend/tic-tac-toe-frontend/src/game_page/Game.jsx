import Board from './board/Board'

import React from 'react'
import { GameWrapper } from './styles/game.styled'


const Game = () => {
    return (
        <>
            <GameWrapper>
                <div className="upper">
                    <div className='player'>

                    </div>
                    <div className='board'>
                        <Board />
                    </div>
                    <div className='player'>

                    </div>
                </div>
                <div className='bottom'>
                    <div className='player2'>
                    </div>
                    <div className='player2'>
                    </div>
                </div>
            </GameWrapper>
        </>
    )
}

export default Game