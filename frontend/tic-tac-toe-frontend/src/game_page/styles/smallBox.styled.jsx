import styled from "styled-components"
export const SmallBoxWrapper = styled.div`

.main{
    width: 110px;
    height: 110px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3125rem
}


.circle{
    width: 90%;
    display: none;
}

.cross{
    width: 90%;
    display: none;
}

@media only screen and (max-width: 500px) {
    .main{
        width: 68px;
        height: 68px;
    }
    
  }
`