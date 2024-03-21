import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar fixed-top navbar-light bg-light " style={{ textDecoration: 'none' }}>
    <Link style={{ textDecoration: 'none' }} to="/login">Login</Link> 
    {/* <Link  to="/Page404">Page not found</Link> */}
    <Link style={{ textDecoration: 'none' }} to="signout"> Sign out</Link>
    <Link style={{ textDecoration: 'none' }} to="Dashboard"> Dashboard</Link>

      
    </div>
  )
}

export default Navbar
