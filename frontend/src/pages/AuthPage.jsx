import React, { useState } from "react";
import "../css/authpage.css";
import { Google, Facebook, GitHub, LinkedIn } from "@mui/icons-material"; // Import Material-UI icons

import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const { register, regerror, isRegLoading, emptyFields } = useRegister();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Call register function
    await register(name, email, password);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      <div className="form-container sign-up">
        <form onSubmit={handleRegister}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="/" className="icon">
              <Google />
            </a>
            <a href="/" className="icon">
              <Facebook />
            </a>
            <a href="/" className="icon">
              <GitHub />
            </a>
            <a href="/" className="icon">
              <LinkedIn />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {regerror && <div className="error">{regerror}</div>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="/" className="icon">
              <Google />
            </a>
            <a href="/" className="icon">
              <Facebook />
            </a>
            <a href="/" className="icon">
              <GitHub />
            </a>
            <a href="/" className="icon">
              <LinkedIn />
            </a>
          </div>
          <span>or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           {error && <div className="error">{error}</div>}
          {/* <a href="#">Forget Your Password?</a> */}
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back !</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className={isSignUp ? "" : "hidden"} onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className={!isSignUp ? "" : "hidden"} onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
