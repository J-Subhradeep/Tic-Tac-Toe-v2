import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { BoxWrapper } from '../styles/Board.styled'
import SmallBox from '../small-box/SmallBox'


const Board = () => {


  const [boardElements, setBoardElements] = useState(['.', '.', '.', '.', '.', '.', '.', '.','.'])

  const [socketUrl, setSocketUrl] = useState(`wss://api.play-real-tictactoe.cloud/api/ws/board/${localStorage.getItem('roomCode')}_board/`);
  // const [socketUrl, setSocketUrl] = useState(`wss://api.play-real-tictactoe.cloud/api/ws/board/${localStorage.getItem('roomCode')}/_board`);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }

    // getting last message
    // let data = JSON.parse(lastMessage)
  }, [lastMessage, setMessageHistory]);


  const handleClickOnBoardElement = (e) => {
    // identify the element/index
    let index = e.currentTarget.className
    // console.log(index)

    let symbol = localStorage.getItem('symbol')

    if (boardElements[index] == 'x' || boardElements[index] == 'o') {
      console.log('already clkd')
    }
    else {
      // console.log(boardElements)

        const newState = boardElements.map((currentelement, i) => {
            // console.log(i)
            if (i == index) {
                return symbol;
            }else{
              
            // console.log(currentelement)
            return currentelement;
            }
        })
        
        setBoardElements(newState);
        sendMessage(JSON.stringify({ arr: newState, lastSymbol: localStorage.getItem('symbol') }))
    }
    // console.log('clickedboard')
  }

  // console.log(boardElements)

  // const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

  let a = [0, 4, 7]


  const win = (a) => {
    a.forEach(fun)
  }

  function fun(item, index, arr) {
    let winBox = document.getElementById(arr[index])
    console.log(item)
    console.log(winBox)
    winBox.style.backgroundColor = 'red';
  }

  // win(a)

  return (
    <>
      <BoxWrapper>
        {/* <button onClick={()=>win(a)}>c</button> */}
        <div className='box'>
          <div className='game-box'>
            <div className='0' onClick={handleClickOnBoardElement}><SmallBox id='0' /></div>
            <div className='1' onClick={handleClickOnBoardElement}><SmallBox id='1' /></div>
            <div className='2' onClick={handleClickOnBoardElement}><SmallBox id='2' /></div>
            <div className='3' onClick={handleClickOnBoardElement}><SmallBox id='3' /></div>
            <div className='4' onClick={handleClickOnBoardElement}><SmallBox id='4' /></div>
            <div className='5' onClick={handleClickOnBoardElement}><SmallBox id='5' /></div>
            <div className='6' onClick={handleClickOnBoardElement}><SmallBox id='6' /></div>
            <div className='7' onClick={handleClickOnBoardElement}><SmallBox id='7' /></div>
            <div className='8' onClick={handleClickOnBoardElement}><SmallBox id='8' /></div>
          </div>
        </div>
      </BoxWrapper>
    </>
  )
}

export default Board