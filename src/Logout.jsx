import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear token, user data, etc.)
    // For example, you can clear the token from local storage
    localStorage.removeItem('token');

    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <Dropdown.Item href="#" className='text-center' onClick={handleLogout}>Logout</Dropdown.Item>
  );
};

export default Logout;