

// import Board from './game_page/board/Board'
import Game from './game_page/Game'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './intro/intro';
import Login from "./login_page/Login"

import "./App.css"
import Game from './game_page/Game';
import Results from './results_page/Results';


function App() {


  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/result" element={<Results/>} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
      {/* <Login/> */}

    </>
  )
}

export default App
