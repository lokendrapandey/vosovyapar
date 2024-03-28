import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear token, user data, etc.)
    // For example, you can clear the token from local storage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <nav id="sidebar" className=' text-center ' >
      <br />
      <div className="sidebar-header" style={{width:"150px"}}>
        <h3>Sidebar</h3>
      </div>
      <br />

      <ul className="list-unstyled components" >
        <li >
        </li>
        {/* <br /> */}
        <li>
          <Link style={{ textDecoration: 'none', color:'black' }} to="/dashboard/home">Dashboard</Link>
        </li>
        {/* <br/> */}
        <h1></h1>

        <li>
          <Link style={{ textDecoration: 'none' , color:'black' }} to="/dashboard/blogs">Blogs</Link>
        </li>
        {/* <br /> */}
        <h1></h1>
        <li>
          <Link style={{ textDecoration: 'none', color:'black' }} to="/dashboard/products">Products</Link>
        </li>
        {/* <br/> */}
        <h1></h1>
      <button style={{border:"none", background:"none"}} onClick={handleLogout}> Logout </button> 
      </ul>
       </nav>
    
  );
}

export default Sidebar;
