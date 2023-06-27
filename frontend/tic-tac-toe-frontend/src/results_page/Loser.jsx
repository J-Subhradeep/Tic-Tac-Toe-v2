import "./style.css";

function Loser() {
  return (
    <div className="app">
      <canvas id="Canvas"></canvas>  
      <div class="wrapper">
        <span>&#128531;</span>
        <span>&#128532;</span>
        <span>&#128534;</span>
        <span>&#128547;</span>
        <span>&#128553;</span>
        <span>&#128546;</span>
        <span>&#128557;</span>
        <span>&#128560;</span>
        <span>&#128555;</span>
        <span>&#128542;</span>
        <span>&#128532;</span>
        <span>&#128546;</span>
        <span>&#128546;</span>
        <span>&#128560;</span>
        <span>&#128555;</span>
      </div>
      <header className="app-header-lose">
        <img src="./sad-gif.gif" className="gif" alt="gif" />
        <p className="result">Better luck next time!</p>
        <p className="lose">You lost</p>
      </header>
    </div>
  );
}

export default Loser;
