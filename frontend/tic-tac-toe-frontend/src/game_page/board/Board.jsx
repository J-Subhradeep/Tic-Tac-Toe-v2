import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { BoxWrapper } from '../styles/Board.styled'
import SmallBox from '../small-box/SmallBox'


const Board = () => {


  const [boardElements, setBoardElements] = useState(['.', '.', '.', '.', '.', '.', '.', '.','.'])
  const [lastSymbol, setLastSymbol] = useState('.')
  const [lastBox, setLastBox] = useState('')

  const [socketUrl, setSocketUrl] = useState(`wss://api.play-real-tictactoe.cloud/api/ws/board/${localStorage.getItem('roomCode')}_board/`);
  const [socketUrl2, setSocketUrl2] = useState(`wss://api.play-real-tictactoe.cloud/api/ws/seconduser/${localStorage.getItem('roomCode')}/${localStorage.getItem('name')}/`);
  console.log(socketUrl2)
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const { sendMessage2, lastMessage2, readyState2 } = useWebSocket(socketUrl2);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      setBoardElements(JSON.parse(lastMessage.data).arr)
      setLastSymbol(JSON.parse(lastMessage.data).lastSymbol)
      setLastBox(JSON.parse(lastMessage.data).lastBox)
    }
    // getting last message
  }, [lastMessage, setMessageHistory]);


  const handleClickOnBoardElement = (e) => {
    // identify the element/index
    let index = e.currentTarget.className
    // console.log(index)

    if (boardElements[index] == 'x' || boardElements[index] == 'o') {
      console.log('already clkd')
    }
    else if(lastSymbol == localStorage.getItem('symbol')){
      console.log('next turn')
    }
    else {

        const newState = boardElements
        if(newState[index] == 'x' || newState[index] == 'o'){

        } else{
          newState[index] = localStorage.getItem('symbol')
        }

        
        // setBoardElements(newState);
        sendMessage(JSON.stringify({ arr: newState, lastSymbol: localStorage.getItem('symbol'), lastBox: index }))
        // console.log(boardElements)

    }
    // console.log('clickedboard')
  }

  // console.log(boardElements)
  // console.log(messageHistory)


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
            <div className='0' onClick={handleClickOnBoardElement}><SmallBox id='0' arr={boardElements} /></div>
            <div className='1' onClick={handleClickOnBoardElement}><SmallBox id='1' arr={boardElements} /></div>
            <div className='2' onClick={handleClickOnBoardElement}><SmallBox id='2' arr={boardElements} /></div>
            <div className='3' onClick={handleClickOnBoardElement}><SmallBox id='3' arr={boardElements} /></div>
            <div className='4' onClick={handleClickOnBoardElement}><SmallBox id='4' arr={boardElements} /></div>
            <div className='5' onClick={handleClickOnBoardElement}><SmallBox id='5' arr={boardElements} /></div>
            <div className='6' onClick={handleClickOnBoardElement}><SmallBox id='6' arr={boardElements} /></div>
            <div className='7' onClick={handleClickOnBoardElement}><SmallBox id='7' arr={boardElements} /></div>
            <div className='8' onClick={handleClickOnBoardElement}><SmallBox id='8' arr={boardElements} /></div>
          </div>
        </div>
      </BoxWrapper>
    </>
  )
}

export default Board