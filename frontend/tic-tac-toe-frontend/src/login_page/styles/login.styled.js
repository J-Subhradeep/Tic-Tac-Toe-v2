import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.whole{
    height: 100vh;
    background-image: linear-gradient(to right, #160264 5%, #6a026a 95%);
    /* background-image: linear-gradient(red,yellow); */
    margin: 0;
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}
.subWhole{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
.playFriends{
    width: 300px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-top: 3px solid #ff00ff;
    border-left: 3px solid #ff00ff;
    border-bottom: 3px solid #ff4081;
    border-right: 3px solid #ff4081;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.playFriends h1{
    font-size: 18px;
    color: aliceblue;
    border-top: 2px solid aliceblue;
    border-bottom: 2px solid aliceblue;
    padding: 3px;
}
.userName{
    width: 250px;
    height: 25px;
    font-size: 18px;
    border: none;
    outline: none;
    padding: 2px;
    text-align: center;
    border-radius: 2px;
}
.roomCode{
    width: 200px;
    text-align: center;
    border: none;
    outline: none;
    padding: 2px;
    border-radius: 1px;
}



.roomGeneration {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: #ff00ff;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .roomGeneration:hover {
    background-color:#9c049c;
  }
  
  .roomGeneration:active {
    background-color: #6a026a;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .joinRoom {
    display: inline-block;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    background-color: #ff4081;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .joinRoom:hover {
    background-color: #f50057;
  }
  
  .joinRoom:active {
    background-color: #c51162;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .copyRoomCode {
    display: inline-block;
    padding: 3px 6px;
    font-size: 5px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    background-color: #ff4081;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .roomCodeField{
    display: flex;
    flex-direction: row;
    gap: 0;
  }
  .copyRoomCode:hover {
    background-color: #f50057;
  }
  
  .copyRoomCode:active {
    background-color: #c51162;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  
  `;