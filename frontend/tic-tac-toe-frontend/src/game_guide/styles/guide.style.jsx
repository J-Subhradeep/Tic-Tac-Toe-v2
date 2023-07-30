import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: #2196f3;  
}
.goBack{
    width: 100vw;
    position: absolute;
    height: 100vh;
    background-color: #2196f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.gameSs{
    ${'' /* background-color: #2196f3; */}
    ${'' /* height: 100vh; */}
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
}
.gameSsIn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
${(props) =>
    props.responsive &&
    css`
    @media (max-width: 1050px)
    {
        .goBack{
            height: max-content;
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }
       .gameSs{
        height: fit-content;
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
