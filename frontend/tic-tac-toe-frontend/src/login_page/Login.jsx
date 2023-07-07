import { useState } from "react";
import { Box, Alert} from '@mui/material';
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
import axios from "axios";
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

  const [error, setError] = useState({
    status: false,
    message: "",
    type: ""
})

  const [copyText, setCopyText] = useState('');

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }

  const copyToClipboard = () => {
    copy(copyText);
    alert(`You have copied the room code`);
  }


  const generateRoomCode = () => {
    axios.get("https://api.play-real-tictactoe.cloud/api/unique")
    .then((res) => setCopyText(res.data.room))
  }

  const [loginInfo, setLoginInfo] = useState({});

    
        // return loginInfo;

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
        name: data.get('name'),
        roomCode: data.get('roomCode'),
    }
    if (actualData.name && actualData.roomCode) {
        // console.log(actualData);
         var res = await axios.post("https://api.play-real-tictactoe.cloud/api/", {
          method: "POST",
          body: ({
              group_name: actualData.roomCode
          })
          })
          setLoginInfo(res.data)
        console.log(res.data.both)
        document.getElementById('login-form').reset()
        if(!res.data.both){
            setError({
                status: true,
                message: "Login Success",
                type: 'success'
            })
            // storeToken(res.data.token)
            // navigate('/dashboard');
            console.log('success')
        } else{
            setError({ status: true, message: res.data.message, type: 'error'})
        }
    }
    // else {
    //     setError({
    //         status: true,
    //         message: "All Fileds Are Required",
    //         type: 'error'
    //     })
    // }
}


  return (
    <>
    <div>
      <GlobalStyle responsive />
      <Box component='form' noValidate id='login-form' onSubmit={handelSubmit} className="whole">
        <div className="subWhole">
          <div className="playFriends">
            <div style={{paddingTop:"20px"}}>
              <TextAnimation>Play With Friends</TextAnimation>
            </div>
            <TextField id="outlined-basic" required label="Name" name="name" variant="outlined" size="medium" style={{ width: "200px" }} />
            <div className="roomCodeField">
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Room Code</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="roomCode"
                  type={'text'}
                  required
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

              <Button onClick={generateRoomCode} variant="contained" style={{ borderRadius: "20px" }}><AutoModeIcon/></Button>
              </Tooltip>
              <Tooltip title="Join to Play">
              <Button type='submit' variant="contained" style={{ borderRadius: "20px" }}><SportsEsportsIcon /></Button>
              </Tooltip>

            </div>
          </div>
          {error.status ? <Alert severity={error.type}>{error.message}</Alert> : ''}
          </div>
                {/* <Developers/>   */}
      </Box>
       
     </div>
                 
    </>
  )
}
export default Login