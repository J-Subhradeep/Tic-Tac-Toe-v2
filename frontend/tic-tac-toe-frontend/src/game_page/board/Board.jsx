import React from 'react'
import { BoxWrapper } from '../styles/Board.styled'
import SmallBox from '../small-box/SmallBox'


const Board = () => {
  return (
    <>
    <BoxWrapper>
    <div className='box'>
          <div className='game-box'>
            <SmallBox id='0'/>
            <SmallBox id='1'/>
            <SmallBox id='2'/>
            <SmallBox id='3'/>
            <SmallBox id='4'/>
            <SmallBox id='5'/>
            <SmallBox id='6'/>
            <SmallBox id='7'/>
            <SmallBox id='8'/>
          </div>
          </div>
    </BoxWrapper>
    </>
  )
}

export default Board