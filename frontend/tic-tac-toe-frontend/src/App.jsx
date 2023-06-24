import './App.css'
import './game_page/board/Board'
import Board from './game_page/board/Board'
function App() {


  return (
    <>
      <div className="upper">
        <div className='player'>

        </div>
        <div className='board'>
          <Board/>
        </div>
        <div className='player'>

        </div>
      </div>
      <div className='bottom'>
        <div className='player2'>
        </div>
        <div className='player2'>
        </div>
      </div>
    </>
  )
}

export default App
