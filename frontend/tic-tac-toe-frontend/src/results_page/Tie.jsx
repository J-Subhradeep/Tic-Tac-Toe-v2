
import './style.css';

function Tie() {
  return (
    <div className="app">
      <header className="app-header-tie">
        <img src="./duo-fight.gif" className="fight-gif" alt="tie" />
        <p className="result-tie">
          Woopsie!
        </p>
        <p className="tie">
          It's a Tie
        </p>
      </header>
    </div>
  );
}

export default Tie;
