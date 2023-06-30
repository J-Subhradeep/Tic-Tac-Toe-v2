import { IntroWrapper } from "./styles/intro.styled";
import SwipeableTextMobileStepper from "./carousel";

const Intro=()=>{
    return(
        <>
            <IntroWrapper>
                <div className="wrapper">
                    <div className="heading">
                        <h1>
                            Real <br/> tic-tac-toe
                        </h1>
                    </div>
                    <div className="credits">
                        <h2>Developed By</h2>
                        <div className="carousel">
                            <SwipeableTextMobileStepper/>
                        </div>
                    </div>
                </div>
            </IntroWrapper>
        </>
    );
}
export default Intro