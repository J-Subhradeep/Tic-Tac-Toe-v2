import { useState } from "react";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import subhradeep from '../assets/images/login_page/'
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
import Developers from "./Developers";
// import './styles/Login.css';

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
  const [copyText, setCopyText] = useState('');

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }

  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied the room code`);
  }
  return (
    <>
      <GlobalStyle responsive />
      <div className="whole">
        <div className="subWhole">
          <div className="playFriends">
            <div style={{paddingTop:"20px"}}>
              <TextAnimation>Play With Friends</TextAnimation>
            </div>
            <TextField id="outlined-basic" label="Name" variant="outlined" size="medium" style={{ width: "200px" }} />
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
                      <Tooltip title="Copy Room Code">
                      <IconButton
                        onClick={copyToClipboard}
                        color="primary"
                        edge="end"
                      ><ContentCopyIcon/>
                      </IconButton></Tooltip>
                    </InputAdornment>
                  }
                  label="Room Code"
                />
              </FormControl>
            </div>

            <div className="buttonSection">
              <Tooltip title="Generate Room Code">

              <Button variant="contained" style={{ borderRadius: "20px" }}><AutoModeIcon/></Button>
              </Tooltip>
              <Tooltip title="Join to Play">
              <Button variant="contained" style={{ borderRadius: "20px" }}><SportsEsportsIcon /></Button>
              </Tooltip>

            </div>
          </div>
          </div>
                {/* <Developers/>   */}
      </div>
       
     
                 
    </>
  )
}
export default Login