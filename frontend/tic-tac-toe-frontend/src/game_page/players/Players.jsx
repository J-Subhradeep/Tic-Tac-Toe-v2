import React from 'react'
// import img from '../../assets/images/game_page/user1.jpg';
import img from '../../assets/images/game_page/user2.jpg';
import { PlayerWrapper } from '../styles/players.styled';

const Players = () => {
  return (
    <PlayerWrapper>
      <div className='players'>
        <img src={img} className="user" alt="user" />
        <p className='name'>User</p>
      </div>
    </PlayerWrapper>
  )
}

export default Players