import React, { useEffect, useState } from 'react';

import { Box, Alert } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri'
import OutlinedInput from '@mui/material/OutlinedInput';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import InputLabel from '@mui/material/InputLabel';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import Tooltip from '@mui/material/Tooltip';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import styled, { keyframes, css } from 'styled-components';
// import copy from "copy-to-clipboard";
import { GlobalStyle } from "./styles/login.styled";
import { Button } from "@mui/material";
import { GameWrapper } from "../game_page/styles/game.styled";
import axios from "axios";
// import './styles/Login.css';

import img from "../../src/assets/images/landing-page/subhradeep.jpeg"

const colorAnimation = keyframes`
  0% { color: #08812c; }
  50% { color: #ff4081; }
  75% { color: #6a026a; }
  100% { color: #08812c;}
`;

const TextAnimation = styled.h1`
    font-size: 18px;
    border-top: 2px solid #6a026a;
    border-bottom: 2px solid #6a026a;
    padding: 3px;
  animation-name: ${colorAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;


const Login = () => {

  const [error, setError] = useState({
    status: false,
    message: "",
    type: ""
  })

  const [name, setName] = useState('')
  const [roomCode, setRoomCode] = useState('')
  const navigate = useNavigate()
  const copyToClipboard = () => {
    const content = roomCode
    navigator.clipboard.writeText(content);
  }





  const generateRoomCode = () => {
    axios.get("https://api.play-real-tictactoe.cloud/api/unique")
      .then((res) => setRoomCode(res.data.room))
  }


  const handelSubmit = async (e) => {
    console.log('clkdeeee')
    e.preventDefault();
    if (name && roomCode) {
      var res = await axios.post("https://api.play-real-tictactoe.cloud/api/", { group_name: roomCode })
      console.log(res.data)
      if (!res.data.both) {
        setError({ status: true, message: "Login Successful", type: 'success' })
        localStorage.setItem('name', name)
        localStorage.setItem('roomCode', roomCode)
        if (res.data.is_first) {
          localStorage.setItem('symbol', 'x')
        } else {
          localStorage.setItem('symbol', 'o')
        }
        setTimeout(() => {
          navigate("/game");
        }, 1000)
      }
      else {
        setError({ status: true, message: "Room is Full", type: 'error' })
      }
    }
    else {
      setError({ status: true, message: "All Fileds Are Required", type: 'error' })
    }
  }
  return (
    <>
      <GlobalStyle responsive />


      <div className="whole">
        <GameWrapper style={{ zIndex: -1 }}>

          <div className="wrapper">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </GameWrapper>
        <div className='total'>
          <div className='left'>
            <img src='../../src/assets/images/login-page/login.png'></img>
          </div>
          <Box component='form' noValidate id='login-form' onSubmit={handelSubmit}>
            <div className="playFriends">
              <div style={{ paddingTop: "20px", paddingBottom: "10px" }}>
                <span className='login-heading'>Play With Friends</span>
              </div>
              <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" required label="Name" name="name" variant="outlined" size="medium" style={{ width: "250px" }} />
              <div className="roomCodeField">
                <FormControl id='room' sx={{ m: 1, width: '250px' }} variant="outlined">
                  <InputLabel required htmlFor="outlined-adornment-password">Paste Room Code</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="roomCode"
                    type={'text'}
                    required
                    value={roomCode} onChange={(e) => setRoomCode(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <Tooltip title="Copy Room Code">
                          <IconButton
                            onClick={copyToClipboard}
                            color="primary"
                            edge="end"
                          ><ContentCopyIcon />
                          </IconButton></Tooltip>
                      </InputAdornment>
                    }
                    label="Room Code"
                  />
                </FormControl>
              </div>

              <div className="buttonSection">

                <Button size='small' onClick={generateRoomCode} endIcon={<AutoModeIcon />} variant="contained" style={{ borderRadius: "5px" }}>Create Room</Button>
                <Button type='submit' size='small' variant="contained" endIcon={<SportsEsportsIcon />} style={{ borderRadius: "5px" }}>Join and play</Button>

              </div>
            </div>
            <div className='error'>
              {error.status ? <Alert style={{ boxShadow: "1px 1px 7px #000000b0" }} severity={error.type}>{error.message}</Alert> : ''}
            </div>
          </Box>

        </div>
      </div>

    </>
  )
}
export default Login