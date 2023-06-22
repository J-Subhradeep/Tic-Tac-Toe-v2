import React from 'react'
import { BoxWrapper } from './Board.styled'
import SmallBox from '../small-box/SmallBox'

const n = 9;

const Board = () => {
  return (
    <>
    <BoxWrapper>
          <div className='game-box'>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
            <SmallBox/>
          </div>
    </BoxWrapper>
    </>
  )
}

export default Board