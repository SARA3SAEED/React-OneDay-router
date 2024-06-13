
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import React from 'react'

export default function NavLogout() {

    const navigate = useNavigate();

    const handleLogout = () => {
      navigate('/Login');
    };
  return (

    <div className="flex justify-between bg-base-100">
    
    <div className="navbar-start">
    <Link to="/" className="btn btn-ghost text-xl">BookStore</Link>
    </div>
    <div className='flex '>
       <div className="navbar-right m-3">
        <button onClick={handleLogout} className="btn"> Logout </button> </div>
    </div>
    </div>
  )
}
