
import React from 'react'
import Nav from './components/Nav.jsx'
import Home from './routers/Home.jsx';
import Books from './routers/Books.jsx';
import Login from './routers/Login.jsx';
import Signup from './routers/Signup.jsx';
import Bookdetails from './routers/Bookdetails.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <>
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Books/:id" element={<Bookdetails />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
