import React, { useState, useEffect } from 'react';

function Blogs() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("sdf")
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{ setUsers(data)
      console.log("data",data)}
      )
      .catch(error => console.error('Error fetching users:', error));

  }, []);


  return (
     <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
     <p className='text-center'>Blogs page</p>
    <table className="table" style={{ height: '80px' }}>
        <thead>
          <tr>  
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blogs;
