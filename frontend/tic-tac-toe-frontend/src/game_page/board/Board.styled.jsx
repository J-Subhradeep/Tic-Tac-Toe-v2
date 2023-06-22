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
}
`