import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.whole{
  box-sizing: border-box;
  height: 100vh;
  ${'' /* background-image: linear-gradient(to right, #160264 5%, #6a026a 95%); */}
  display: flex;
  justify-content: center;
  align-items: center;
    ${"" /* width: 100vw; */}
    /* background-image: linear-gradient(red,yellow); */
    ${"" /* margin: 0; */}
    padding: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    ${"" /* align-content: center; */}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.subWhole{
  position: fixed;

    ${"" /* padding-top: 100px; */}
    ${"" /* margin-top: 200px; */}
    ${"" /* margin-left:40vw; */}
    display: flex;
    flex-direction: column;
    align-items: center; 
     justify-content: center; 
    gap: 16px;
    ${"" /* margin-top: 25vh; */}
}
.playFriends{
  ${'' /* background-color: black; */}
  ${'' /* z-index: 200;
  opacity: 1; */}
    /* min-width: 15vw; */
    ${"" /* min-height: 150px; */}
    ${"" /* position: relative; */}
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid white;
    background-color: white;
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0px;
    padding-bottom: 20px;
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
  .devSection{
    position: fixed;
   bottom: 0;
    ${"" /* margin-top: 25vh; */}
    width: 100vw;
    ${
      "" /* background-image: linear-gradient(to right, #160264 5%, #6a026a 95%); */
    }
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    flex-direction: row;
    ${"" /* align-items: center; */}
    justify-content: right;
    ${"" /* padding-right: 10px; */}
  }
  .developers{
    ${"" /* position: fixed; */}
    list-style: none;
    margin: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 3px;
    ${"" /* justify-content: space-evenly; */}
  }
  img{
    border-radius: 50%;
  }
  .eachElement{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    gap: 8px;
    ${"" /* text-align: center; */}
  }
  .developers li .eachElement p{
    text-align: left;
  } 
  .developers li p{
    width: 125px;
    color: #fff;
  }
  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 800px) {
        .subWhole {
          position: relative;
          /* bottom:100px; */
          /* bottom:0 */
        }
        .devSection {
          left: 12px;

          /* justify-content: center; */
          position: fixed;
          bottom: 0;
        }
        @media (max-width: 500px) {
          .subWhole {
            position: relative;
            /* top:20px */
          }
          .devSection {
            /* top: 20px; */
            /* position: fixed; */
            justify-content: center;
          }
        }
      }
    `}
  
  `;
// BsLinkedin
