import styled from "styled-components"
export const IntroWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');


.wrapper{
    
    background: linear-gradient(114.9deg, rgb(34, 34, 34) 8.3%, rgb(0, 40, 60) 41.6%, rgb(0, 143, 213) 93.4%);
    height: 100vh;
    display: flex;
}

.heading{
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.heading h1{
    font-family: 'Nova Oval', cursive;
    font-size: 4rem;
    color: white;
    margin-top: 200px;
}
.credits{
    width: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    grid-column-gap: 80px;
}

.carousel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.carousel h2{
    color: white;
}

.img{
    width: 220px;
    height: 220px;
    opacity: 0.4;
}


`