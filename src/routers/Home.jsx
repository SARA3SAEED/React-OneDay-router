import React from 'react'
import Nav from '../components/Nav.jsx'
import { useNavigate } from 'react-router-dom'




export default function Home() {
 
  const navigate = useNavigate();
  const LoginPage = ()=>{
    navigate('/Login')
  }


  return (
    <div>
      <Nav></Nav>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">BookStore</h1>
          <p className="py-6">join with us.</p>
          <button onClick={LoginPage} className="btn btn-primary">SignUp</button>
        </div>
      </div>
    </div>
    </div>
  )
}
