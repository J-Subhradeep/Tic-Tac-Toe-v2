import styled from "styled-components"
export const GameWrapper = styled.div`

body{
  margin: 0;
  padding: 0;
  background: rgb(5,13,49);
  background: linear-gradient(90deg, rgba(5,13,49,1) 0%, rgba(9,9,121,1) 35%, rgba(140,0,178,1) 100%);
}

.upper{
    display: grid;
    height: 100vh;
    width: 100%;
    grid-gap: 10px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
}

.player{
    height: 250px;
    width: 250px;
    /* background-color: aqua; */
    display: inline-block;
    border: 2px solid black;
}


.board{
    height: 90vh;
    /* background-color: rgb(6, 167, 121); */
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.player2{
    height: 150px;
    width: 150px;
    /* background-color: aqua; */
    display: inline-block;
    border: 2px solid black;
}

.bottom{
    height: 50vh;
    width: 100%;
    grid-gap: 20px;
    grid-template-columns: 120px 120px;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 50px; */
    display: none;
}


@media only screen and (max-width: 850px) {
    .upper{
        grid-template-columns: 100%;
        align-items: start;
        height: 50vh;;
    }

    .player{
        display: none;
    }

    .board{
        height: 50vh;
        border: none;
    }

    .bottom{
        display: grid;
        grid-template-columns: auto auto;
    }
    
  }


@media only screen and (max-height: 550px) {
    .upper{
        display: grid;
        height: 100vh;
        width: 100%;
        grid-gap: 20px;
        grid-template-columns: auto auto auto;
        justify-content: center;
        align-items: center;
}

.player{
    height: 120px;
    width: 120px;
    display: inline-block;
    border: 2px solid black;
}

    .board{
        height: 90vh;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .bottom{
        display: none;
    }
    
  }
`