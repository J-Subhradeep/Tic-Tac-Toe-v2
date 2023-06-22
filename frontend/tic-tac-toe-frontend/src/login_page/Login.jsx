import React from "react";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { GlobalStyle } from "./styles/login.styled";
// import './styles/Login.css';

const Login=()=>{
    return(
        <>
        <GlobalStyle/>
        <div className="whole">
        <div className="subWhole">
            <input type="string" placeholder="Enter username" className="userName"></input>
            <div className="playFriends">
            <h1>Play With Friends</h1>
            <div className="roomCodeField">
            <input type="string" placeholder="Enter or generate roomcode" className="roomCode"></input>
            <button className="copyRoomCode"><ContentCopyIcon /></button>
            </div>
            <button className="roomGeneration">Generate Room Code</button>
            <button className="joinRoom">Join</button>
            </div>
            
            {/*  */}
        </div>
        </div>
        
        </>
    )
}
export default Login