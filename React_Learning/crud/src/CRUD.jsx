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
    <div className="container p-1">
  <h2 className="text-center">Users</h2>
  {error && <p className="text-center text-danger">{error}</p>}
  <div className="table-responsive">
    <table className="table table-bordered table-hover table-centered">
      <thead className="thead-dark text-center">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {users.map(user => 
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
              <button className="btn btn-primary mx-1">Update</button>
              <button className="btn btn-danger mx-1">Delete</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default Users;
