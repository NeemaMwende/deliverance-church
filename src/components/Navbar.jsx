import React from 'react'
import "./Navbar.css"
import logo1 from "../Images/dclogo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className='nav'>
                <div className='logo'>
                    <img src={logo1} width={110} height={100}/>
                </div>
                <div>
                    <ul className='navbar-list'>
                        <li className='navbar-item'><a href="">Home</a></li>
                        <li className='navbar-item'><a href="">Themes</a></li>
                        <li className='navbar-item'><a href="">Services</a></li>
                        <li className='navbar-item'><a href="">Products</a></li>
                        <li className='navbar-item'><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
