import React from 'react';
import './Login.css';

const Login = () => {
  return (

    
    <div className="login-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RtiAMKTwBe7WLLasZ1w7M7W9LD3PQF_p4g&s"
        
        alt="page-logo-image"
      />
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <label >Email</label>
        <input
          type="text"
          id="username"
          placeholder="Enter your username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button className="login-button">
          Login
        </button>
        <button
          className="login-button"
        >
          Don’t have an account? Register
        </button>
      </div>
    </div>
  );
};

export default Login;
