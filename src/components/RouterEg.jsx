import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './section/About';
import Contact from './section/Contact';
import Home from './section/Home';
import Navbar from './section/Navbar';
import Login from './section/Login';
import Error from './section/Error';

const RouterEg = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterEg
    
    
{ /*<Route path="/" element={<div>Home</div>}></Route>
          <Route path="/contact" element={<div>contact page</div>}></Route>
          <Route path="/About" element={<div>About page</div>}></Route>*/}