import { IntroWrapper } from "./styles/intro.styled";
import SwipeableTextMobileStepper from "./carousel";

import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Intro = () => {
    return (
        <>
            <IntroWrapper>


                <div class="wrapper2">
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                    <span>❌</span>
                    <span>⭕</span>
                </div>
                <div class="banner">
                    <div class="content">
                        <div className="heading">
                            <span>Real</span>
                            <span>tic-tac-toe</span>
                            <div className="buttons">
                                <Button className="button" href="/Login" variant="contained" sx={{ zIndex: 5, fontWeight: 'bold', }} startIcon={<SportsEsportsIcon />}>Play Now</Button>
                                <br/>
                                <Button className="button" href="/"  variant="outlined" sx={{ zIndex: 5, fontWeight: 'bold' }}>game Guide</Button>
                            </div>
                        </div>
                        <div className="credits">
                            <div className="carousel">
                                <h2>Developed By</h2>
                                <SwipeableTextMobileStepper />
                            </div>
                            <img className="img" src="../../src/assets/images/landing-page/bgimg1.png" />
                        </div>
                    </div>
                </div>
            </IntroWrapper>
        </>
    );
}
export default Intro