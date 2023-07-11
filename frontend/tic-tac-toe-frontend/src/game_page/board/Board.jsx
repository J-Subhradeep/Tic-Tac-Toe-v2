import React, { useEffect, useState } from 'react'
import { BoxWrapper } from '../styles/Board.styled'
import SmallBox from '../small-box/SmallBox'
import { convertLength } from '@mui/material/styles/cssUtils'


const Board = () => {


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
  // const [boardElements, setBoardElements] = useState(['.', '.', 'X', '0', '.', '.', '.', 'X'])
  // const [socketUrl, setSocketUrl] = useState(
  //   "wss://api.play-real-tictactoe.cloud/api/ws/board/" + room + "_board" + "/"
  // );
  // const [messageHistory, setMessageHistory] = useState([]);
  // const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, { shouldReconnect: (CloseEvent) => true, reconnectAttempts: 10, reconnectInterval: 2000 });
  // useEffect(() => {
    // trigger when new message is received

    // if (lastMessage !== null) {
    //   setMessageHistory((prev) => prev.concat(lastMessage));
    // }


    // getting last message
    // const data = Json.parse->lastMessage
    // {arr:size(9),lastSymbol:'X'}
    // setBoardElements


  // }, [lastMessage, messageHistory])

  const handleClickOnBoardElement = (e) => {
    console.log(e.id); 
    // identify the element/index

    // localstorage symbol x/0

    const arr = boardElements;
    // if(arr[index]==x/0)
    // else{
      // arr[index] = x/0
    // }
    // sendMessage(JSON.stringify({arr:arr, lastSymbol:localStorage.getItem(symbol)}))


  }
  return (
    <>
      <BoxWrapper>
        {/* <button onClick={()=>win(a)}>c</button> */}
        <div className='box'>
          <div className='game-box'>
            <SmallBox id='0' />
            <SmallBox id='1' />
            <SmallBox id='2' />
            <SmallBox id='3' />
            <SmallBox id='4' />
            <SmallBox id='5' />
            <SmallBox id='6' />
            <SmallBox id='7' />
            <SmallBox id='8' />
          </div>
        </div>
      </BoxWrapper>
    </>
  )
}

export default Board