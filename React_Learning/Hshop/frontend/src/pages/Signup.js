import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Signup({setUser}) {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        })
        .then(data => {
          console.log('User created successfully:', data);
          setUser(data.user)
          toast.success("Profile created!");
          navigate('/login')
        })
        .catch(err => {
          console.error('There was a problem with the fetch operation:', err);
          toast.error("Failed to create profile.");
        });
      };
      

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark text-white">
            <form className="p-4 rounded bg-secondary" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={(e)=>setEmail(e.target.value)}
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
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <div className="text-center mt-3">
                    <Link to="/" className="text-light">Go to Home</Link>
                </div>
            </form>
        </div>
    );
}
