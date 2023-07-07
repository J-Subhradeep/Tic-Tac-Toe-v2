import styled from "styled-components"
export const ChatWrapper = styled.div`

* {
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}


.chat-popup {
    display: none;
    position: fixed;
    bottom: 0;
    right: 15px;
    border: 3px solid #044275;
    border-radius: 1rem;
    z-index: 100;
    height:450px;
    width:250px;
    background-color: white;
}

/* Hide scrollbar for Chrome, Safari and Opera */
/* .messages::-webkit-scrollbar {
    display: none;
} */

/* Hide scrollbar for IE, Edge and Firefox */
.messages {
  /* -ms-overflow-style: none;  
  scrollbar-width: none;   */
  padding:0.4rem;
  height:76%;
  overflow: auto;
}

.messages::-webkit-scrollbar {
    width: 8px;
}
 
.messages::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
.messages::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

.btn {
    padding: 0;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    width: fit-content;
    height:fit-content;
     /* margin-bottom: 15px; */
    float:right;
}


.btn:hover
{
    opacity: 1;
}


@media only screen and (max-height: 449px) {
    .chat-popup{
        height:100%;
          }
          .gyCPYO {
    position: absolute;
    bottom: 0;
}
  }

`
