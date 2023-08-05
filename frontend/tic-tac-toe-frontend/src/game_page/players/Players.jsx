import React from 'react'
// import img from '../../assets/images/game_page/user1.jpg';
import img from '../../assets/images/game_page/user2.jpg';
import { PlayerWrapper } from '../styles/players.styled';

const Players = (props) => {
  let userName;
  if(props.name.length>10){
    userName = props.name.substring(0,10)+ '...';
  }
  else{
    userName = props.name;
  }

  return (
    <PlayerWrapper>
      <div className='players'>
        <img src={img} className="user" alt="user" />
        <p className='name'>{userName}</p>
      </div>
    </PlayerWrapper>
  )
}

export default Players