import React from 'react'
import { BoxWrapper } from './Board.styled'
import SmallBox from '../small-box/SmallBox'

const n = 9;

const Board = () => {
  return (
    <>
    <BoxWrapper>
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
    </BoxWrapper>
    </>
  )
}

export default Board