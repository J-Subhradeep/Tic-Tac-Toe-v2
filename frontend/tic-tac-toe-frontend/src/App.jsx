
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './intro/intro';
import Login from "./login_page/Login"

import "./App.css"

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Login/game" element={<h1>Game Page</h1>} />
        <Route path="/Login/game/result" element={<h1>Result Page</h1>} />
        <Route path='*' element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
      {/* <Login/> */}
    </>
  )
}

export default App
