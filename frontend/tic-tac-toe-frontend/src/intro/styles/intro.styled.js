import styled from "styled-components"
export const IntroWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Nova+Oval&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.content{
    
    background: #001E3C;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow-y: hidden;
}

.heading{
    width: 35%;
    height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    padding-top: 180px;
}

.span-div{
    display: flex;
    flex-direction: column;
    align-items: start;
}

.heading span{
    font-family: 'Nova Oval', cursive;
    font-size: 4.5rem;
    color: white;
    z-index: 10;
}
.credits{
    width: 50%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto auto;
    grid-column-gap: 80px;
}

.technology-stack{
    width: 240px;

    z-index: 10;
}

.buttons{
    width: 100%;
    display: flex;
    justify-content: center;
}

.button{
    width: 155px;
    margin: 40px 10px 0 10px;
}

.carousel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.carousel h2{
    color: white;
    font-family: 'Ubuntu', sans-serif;
}

.img{
    width: 220px;
    height: 220px;
    opacity: 0.4;
    z-index: 10;
}


.wrapper2 span {
	position: fixed;
	bottom: -80px;
	animation: animate 10s linear infinite;
	font-size: 40px;
	z-index: 5;
}

.wrapper2 span:nth-child(1){
    left: 60px;
    animation-delay: 0.6s;    
}
.wrapper2 span:nth-child(2){
    left: 10%;
    animation-delay: 3s;  
}
.wrapper2 span:nth-child(3){
    left: 20%;
    animation-delay: 2s;    
}
.wrapper2 span:nth-child(4){
    left: 30%;
    animation-delay: 5s;   
}
.wrapper2 span:nth-child(5){
    left: 40%;
    animation-delay: 1s;    
}
.wrapper2 span:nth-child(6){
    left: 50%;
    animation-delay: 7s;    
}
.wrapper2 span:nth-child(7){
    left: 60%;
    animation-delay: 6s;  
}
.wrapper2 span:nth-child(8){
    left: 70%;
    animation-delay: 8s;    
}
.wrapper2 span:nth-child(9){
    left: 80%;
    animation-delay: 6s;  
}
.wrapper2 span:nth-child(10){
    left: 90%;
    animation-delay: 4s;    
}

.banner{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 1;
}


@keyframes animate{
    0% {
      transform: translateY(0);
        opacity: 1
    }
    70%{
        opacity: .8;
    }
    100% {
      transform: translateY(-800px) rotate(360deg);	
        opacity: 0
    }
}


@media only screen and (max-width: 1200px) {

    .img{
    width: 150px;
    height: 150px;
    }
    .heading{
    width: 40%;
    }
    .heading span{
        font-size: 4rem;
    }
    .button{
    width: 140px;
    margin: 40px 10px 0 10px;
    font-size: small;
    }
    .credits{
        width: 60%;
    }

}

@media only screen and (max-width: 850px) {
    
    .content{
        flex-direction: column;
    }

    .heading{
    width: 100%;
    height: 40vh;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    }

    .span-div{
    align-items: center;
}

    .heading span{
        font-size: 3rem;
    }

    .img{
        display: none;
    }

    .credits{
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-gap: 0;
    }

    .carousel{
        width: 100%;
    }

    .button{
    width: 120px;
    margin: 40px 10px 0 10px;
    font-size: x-small;
    }

    .carousel h2{
    font-size: 1rem;
}

    
  }


`