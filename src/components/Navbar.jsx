import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
           <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className='nav-link' to="/" >Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/about" >About</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/invitations" >InvitationList</Link>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar