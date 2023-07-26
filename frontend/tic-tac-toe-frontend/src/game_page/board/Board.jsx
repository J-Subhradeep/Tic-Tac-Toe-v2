import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useNavigate } from 'react-router-dom';
import { BoxWrapper } from '../styles/Board.styled'
import SmallBox from '../small-box/SmallBox'


const Board = () => {


  const [boardElements, setBoardElements] = useState(['', '', '', '', '', '', '', '', ''])
  const [lastSymbol, setLastSymbol] = useState('.')
  const [lastBox, setLastBox] = useState('')

  const navigate = useNavigate()

  const [socketUrl, setSocketUrl] = useState(`wss://api.play-real-tictactoe.cloud/api/ws/board/${localStorage.getItem('roomCode')}_board/`);
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const checkWinning = (board) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] == localStorage.getItem('symbol')) {
          winLines[i].forEach(win)
          setTimeout(() => {
            navigate("/result", {
              state: {
                winner: true
              },
            })
          }, 1000)
        } else {
          winLines[i].forEach(win)
          setTimeout(() => {
            navigate("/result", {
              state: {
                winner: false
              },
            })
          }, 1000)
        }
        
      return
      }
    }
    if (board.every((val) => val !== "")) {
      setTimeout(() => {
        navigate("/result", {
          state: {
            winner: null
          },
        })
      }, 1000)
    }
  };


  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
      setBoardElements(JSON.parse(lastMessage.data).arr)
      setLastSymbol(JSON.parse(lastMessage.data).lastSymbol)
      setLastBox(JSON.parse(lastMessage.data).lastBox)
      checkWinning(JSON.parse(lastMessage.data).arr)
    }
    // getting last message
  }, [lastMessage, setMessageHistory]);


  const handleClickOnBoardElement = (e) => {
    // identify the element/index
    let index = e.currentTarget.className

    if (boardElements[index] == 'x' || boardElements[index] == 'o') {
      console.log('already clkd')
    }
    else if (lastSymbol == localStorage.getItem('symbol')) {
      console.log('next turn')
    }
    else {

      const newState = boardElements
      if (newState[index] == 'x' || newState[index] == 'o') {

      } else {
        newState[index] = localStorage.getItem('symbol')
      }
      sendMessage(JSON.stringify({ arr: newState, lastSymbol: localStorage.getItem('symbol'), lastBox: index, }))

    }
  }


  function win(item, index, arr) {
    let winBox = document.getElementById(arr[index])
    console.log(item)
    console.log(winBox)
    winBox.style.backgroundColor = 'red';
  }


  return (
    <>
      <BoxWrapper>
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