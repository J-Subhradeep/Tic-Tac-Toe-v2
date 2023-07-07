import styled from "styled-components"
export const CarouselWrapper = styled.div`

.typography{
    font-weight: bold
}

.smallicon{
    display: none;
}


@media only screen and (max-width: 1200px) {

        .main-box{
        width: 250px;
    }
    
    .photo{
        height: 200px;
        width: 250px;
}

}

@media only screen and (max-width: 850px) {

    .main-box{
        width: 210px;
    }
    
    .photo{
        height: 160px;
        width: 210px;
    }
    .typography{
        font-size: small;
    }
    .largeicon{
        display: none;
    }
    .smallicon{
        display: block;
    }

}




`