import React from 'react';

const Signout = () => {
  return (
    <nav>
      <ul>
        <li>VosoVyapar</li>
        <li>III</li>
        <li>E</li>
        <li>Dashboard</li>
        <li>Users</li>
        <li>
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle">
            Products and Galleries
            <span className="checkmark"></span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="toggle2" />
          <label htmlFor="toggle2">
            Blogs and Services
            <span className="checkmark"></span>
          </label>
        </li>
        <li>LOGOUT</li>
      </ul>
    </nav>
  );
};

export default Signout;