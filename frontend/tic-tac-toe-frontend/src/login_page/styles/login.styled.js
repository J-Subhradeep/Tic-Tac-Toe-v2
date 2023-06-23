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
    gap: 16px;
}
.playFriends{
    width: 300px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid white;
    background-color: white;
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 12px 0 rgba(0, 0, 0, 0.2),
    0 8px 16px 0 rgba(0, 0, 0, 0.2);
    
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
.roomGeneration {
    display: inline-block;
    padding: 6px 20px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    /* background-color: #ff00ff; */
    background-color: #08812c;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .roomGeneration:hover {
    /* background-color:#9c049c; */
    background-color: #096b26;
  }
  
  .roomGeneration:active {
    /* background-color: #6a026a; */
    background-color: #036521;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .joinRoom {
    display: inline-block;
    padding: 6px 20px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    /* background-color: #ff4081; */
    background-color: #2196f3;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .joinRoom:hover {
    /* background-color: #f50057; */
    background-color: #1e88e5;
  }
  
  .joinRoom:active {
    /* background-color: #c51162; */
    background-color: #1976d2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  
  .roomCodeField{
    display: flex;
    flex-direction: row;
    gap: 0;
    justify-content: center;
    align-items: center;
  }
  .buttonSection{
    margin-top: 0px;
    display: flex;
    flex-direction:row ;
    gap: 64px;
  }
  
  
  
  
  
  
  `;