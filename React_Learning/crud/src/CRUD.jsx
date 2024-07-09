import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <strong>{user.name}</strong> ({user.website}) - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
