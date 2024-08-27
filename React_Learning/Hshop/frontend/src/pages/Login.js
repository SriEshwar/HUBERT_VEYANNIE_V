import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })
        .then(response => response.json().then(data => ({ status: response.status, body: data })))
        .then(result => {
          if (result.status === 200) {
            console.log('User authenticated successfully:', result.body);
            setUser(result.body.user); // Set user information
            toast.success("Login successful!");
            navigate('/'); // Navigate to home or any other route after successful login
          } else {
            console.error('Authentication failed:', result.body.message);
            toast.error(result.body.message || "Failed to login.");
          }
        })
        .catch(err => {
          console.error('There was a problem with the fetch operation:', err);
          toast.error("Failed to login.");
        });
      };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark text-white">
            <form className="p-4 rounded bg-secondary" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <div className="text-center mt-3">
                    <Link to="/signup" className="text-light">Don't have an account? Sign Up</Link>
                </div>
                <div className="text-center mt-3">
                    <Link to="/" className="text-light">Go to Home</Link>
                </div>
            </form>
        </div>
    );
}
