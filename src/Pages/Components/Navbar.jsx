import React from 'react'
import '../Styles/Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className='nav-logo'/>
        <div className="nav-menu">
            <Link to='/' className='nav-menu-item'>Home</Link>
            <Link to='/genre' className='nav-menu-item'>Genre</Link>
            <Link to='/booked' className='nav-menu-item'>Booked</Link>
        </div>
        <div className="nav-login">
            <button className='login-btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar