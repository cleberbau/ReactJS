import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>} />           
        </Routes>
      </Router>

  );
}


export default App
