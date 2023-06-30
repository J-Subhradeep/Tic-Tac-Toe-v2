import { IntroWrapper } from "./styles/intro.styled";
import SwipeableTextMobileStepper from "./carousel";

const Intro = () => {
    return (
        <>
            <IntroWrapper>
                <div className="wrapper">
                    <div className="heading">
                        <h1>
                            Real <br /> tic-tac-toe
                        </h1>
                    </div>
                    <div className="credits">
                            <div className="carousel">
                                <h2>Developed By</h2>
                                <SwipeableTextMobileStepper />
                            </div>
                            <img className="img" src="../../src/assets/images/landing-page/bgimg1.png" />
                    </div>
                </div>
            </IntroWrapper>
        </>
    );
}
export default Intro