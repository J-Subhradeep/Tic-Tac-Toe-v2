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
    border: 3px solid #05c1f0;
    z-index: 100;
    height:450px;
    width:250px;
    background-color: white;
  
}
/* Hide scrollbar for Chrome, Safari and Opera */
.messages::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.messages {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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



@media (max-height: 453px) {
    .chat-pop{
        height: 100%;
       
    }
    
  }

`
