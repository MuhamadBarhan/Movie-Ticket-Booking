import React from 'react'
import '../Styles/Navbar.css'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
        <img src={logo} alt="logo" className='nav-logo'/>
        <div className="nav-menu">
            <Link to='/' className='nav-menu-item'>Home</Link>
            <Link to='/genre' className='nav-menu-item'>Genre</Link>
            <Link to='/booked' className='nav-menu-item'>Booked</Link>
        </div>
        <div className="nav-login">
            <button className='login-btn' onClick={()=>navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Navbar