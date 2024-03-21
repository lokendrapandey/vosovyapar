import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
        <br />
        <li>
          <Link style={{ textDecoration: 'none' }} to="/dashboard/home">Dashboard</Link>
        </li>
        <br/>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/dashboard/blogs">Blogs</Link>
        </li>
        <br />
        <li>
          <Link style={{ textDecoration: 'none' }} to="/dashboard/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
