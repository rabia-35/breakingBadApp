import './App.css';
import React from "react"
import Home from "./components/home/home"
import Detail from './components/detail/detail';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
         
        </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
