import React, { useState } from "react";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
// import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import styled, { keyframes } from 'styled-components';
import copy from "copy-to-clipboard";
import { GlobalStyle } from "./styles/login.styled";
// import './styles/Login.css';

const colorAnimation = keyframes`
  0% { color: #08812c; }
  50% { color: #ff4081; }
  100% { color: #6a026a; }
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

const Login=()=>{
        const [copyText, setCopyText] = useState('');
     
        const handleCopyText = (e) => {
            setCopyText(e.target.value);
        }
     
        const copyToClipboard = () => {
            copy(copyText);
            alert(`You have copied the room code`);
        }
    return(
        <>
        <GlobalStyle/>
        <div className="whole">
        <div className="subWhole">
            <div className="playFriends">
            <h1>
            <TextAnimation>Play With Friends</TextAnimation>
            </h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" size="medium" style={{width: "200px"}}/>
            <div className="roomCodeField">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Room Code</InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            value={copyText}
            onChange={handleCopyText}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                    onClick={copyToClipboard}
                  color="primary"
                  edge="end"
                ><ContentCopyIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Room Code"
          />
          </FormControl>
            </div>
            
            <div className="buttonSection">
            <button className="roomGeneration"><CreateNewFolderRoundedIcon/></button>
            <button className="joinRoom"><AddRoundedIcon/></button>
            </div>
            </div>
            
        </div>
        </div>
        
        </>
    )
}
export default Login