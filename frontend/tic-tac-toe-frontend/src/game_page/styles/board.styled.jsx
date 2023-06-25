import styled from "styled-components"
export const BoxWrapper = styled.div`

.game-box{
    height: 350px;
    width: 350px;
    ${'' /* background-color: white; */}
    display: grid;
    justify-content: space-between;
    ${'' /* justify-items: space-between; */}
    grid-row-gap: 6px;
    grid-column-gap: 6px;
    grid-template-columns: auto auto auto;
    border: 2px solid #e0eff1;
    padding: 10px;
    /* background-color: aqua; */
}

@media only screen and (max-width: 850px) {
    .game-box{
        height: 220px;
        width: 220px;
    }
    
  }

@media only screen and (max-height: 550px) {
    .game-box{
        height: 150px;
        width: 150px;
        grid-row-gap: 2px;
        grid-column-gap: 2px;
        padding: 5px;
    }
    
  }
`