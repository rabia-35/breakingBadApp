import './App.css';
import React from "react"
import Home from "./components/pages/home"
import Detail from './components/pages/detail';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/footer';
import Quotes from './components/pages/quotes';
import Navbar from './components/navbar';

function App() {
  return (
      <div className='App-header'>
        <BrowserRouter > 
            <Navbar /> 
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/char/:char_id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
