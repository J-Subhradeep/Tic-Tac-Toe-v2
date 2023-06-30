import { TieWrapper } from "./styles/tie.styled";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Howl } from "howler";
import { useEffect } from "react";
import music from "../assets/audios/tie.wav";

function Tie() {
  useEffect(() => {
    const sound = new Howl({
      src: [music],
      loop: true,
    });
    sound.play();
    return () => {};
  }, []);

  return (
    <TieWrapper>
      <div className="app">
        <div class="canvas-123"></div>
        <header className="app-header-tie">
          <img src="./duo-fight.gif" className="fight-gif" alt="tie" />
          <p className="result-tie">Woopsie!</p>
          <p className="tie">It's a Tie</p>
          <IconButton
            // onClick={() => alert("Clicked")}
            aria-label="back-to-home"
            color="primary"
            size="large"
            href=""
          >
            <HomeIcon fontSize="inherit" />
          </IconButton>
        </header>
      </div>
    </TieWrapper>
  );
}

export default Tie;
