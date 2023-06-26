import './styles/style.css';

function Loser() {
  return (
    <div className="app">
      <header className="app-header-lose">
        <img src="./sad-gif.gif" className="gif" alt="gif" />
        <p className="result">
          Better luck next time!
        </p>
        <p className="lose">
          You lost
        </p>
      </header>
    </div>
  );
}

export default Loser;
