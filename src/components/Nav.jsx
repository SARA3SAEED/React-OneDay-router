import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function Nav() {

    const navigate = useNavigate();
    const X = (e) => { navigate(e) }

  return (
    <div className="flex justify-between bg-base-100">
    <div className="flex justify-between ">
    <Link to="/" className="btn btn-ghost text-xl">BookStore</Link>
    </div>

   <div className='flex '>
    <div className="navbar-right m-3">
      <Link to="/SignUp" className="btn">SignUp</Link>
    </div>
    
    <div className="navbar-right m-3 ">
      <Link to="/Login" className="btn w-[80px]">Login</Link>
    </div>
    </div>
    </div>
  )
}
