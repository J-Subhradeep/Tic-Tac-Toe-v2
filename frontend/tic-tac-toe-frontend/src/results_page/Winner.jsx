
import './Winner.css';

function Winner() {
  return (
    <div className="app">
      <canvas id="Canvas"></canvas>
      {/* <script src="Back.jsx"></script> */}
      <header className="app-header">
        <img src="./trophy.png" className="logo" alt="logo" />
        <p className="result">
          Congratulations!
        </p>
        <p className="win-loss">
          Winner
        </p>
      </header>
    </div>
  );
}

export default Winner;
