import styled from "styled-components"

export const ChatHeadWrapper = styled.div`

.strip{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #260483;
    height: 3rem;
    .heading{
       
        display:flex;
        align-items:center;
        gap: 0.5rem;
        .icon{
           font-size:30px;
           color:white;
        }
        .head-text{
            font-family: cursive;
            color:white;
        }
    }
    .cancel {
    float: right;
    position:absolute;
    top:0;
    right:0;
    cursor: pointer;
    opacity:0.9;
    width: 1.2rem;
    height: 1.2rem;
    }
    .cancel:hover{
        opacity:1;
    }
}
`