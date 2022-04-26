import './App.css';
import React from "react"
import Home from "./components/home/home"
import Detail from './components/detail/detail';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap"
import Footer from './components/footer/footer';

function App() {
  return (
      <div className='App-header'>
        <BrowserRouter >
            <Navbar expand="lg" bg="dark"  className='navbar'>
              <Container>
                <Navbar.Brand href="/" style={{textDecoration:"none", color:"#ddd"}}>Characters</Navbar.Brand>
              </Container>
            </Navbar>
              
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/:char_id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
