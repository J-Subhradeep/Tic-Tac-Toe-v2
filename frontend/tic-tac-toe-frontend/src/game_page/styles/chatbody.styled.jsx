import styled from "styled-components"
export const ChatBodyWrapper = styled.div`


gap: 0.1rem;
padding-top: 0.3rem;

.chat-messages{
    padding: 0.1rem ;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    overflow:auto;
    .message{
      display:flex;
      align-items:center;
     
      .content{
        max-width:70%;
        overflow-wrap:break-word;
        padding-left:1rem;
        padding-right:1rem;
        font-size:0.85rem;
        font-family:cursive;
        border-radius:1.5rem;
        color:black;
        background-color: #e2dcdc;
          
      }
      
  .message::after {
    content: "";
    clear: both;
    display: table;
  }
    }

    .sender{
      justify-content:flex-end;
      .content{
        background-color:#bfd9e9;
      }
    }
    
  }
`