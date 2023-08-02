import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: #132F4C;  
}
.headA{
    font-size: 30px;
}
.headB{
    font-size: 25px;
}
.gameSs{
    ${'' /* background-color: #2196f3; */}
    ${'' /* height: 100vh; */}
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.gameSsIn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
${(props) =>
    props.responsive &&
    css`
    @media (max-width: 1050px)
    {
        .headA{
            font-size: 15px;
        }
        .headB{
            font-size: 15px;
        }
       .gameSs{
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
       } 
       .gameSsIn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
       }
    }
    `
    }
`
