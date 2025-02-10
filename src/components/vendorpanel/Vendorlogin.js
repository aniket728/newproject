import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api_url } from '../../helpers/api_helper';

const Vendorlogin = () => {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleFocus = (setFocus) => {
    setFocus(true);
  };

  const handleBlur = (setFocus, value) => {
    if (value === "") {
      setFocus(false);
    }
  };

  const navigate = useNavigate();
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const vName = localStorage.getItem("vendorName");

  useEffect(() => {
    if (vName !== null) {
      navigate("/dashboard");
    }
  }, [navigate, vName]);

  const loginVendor = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch(`${api_url}/api/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        }),
        headers: {
          "Content-Type": 'application/json'
        }
      });
      const result = await response.json();

      if (result.statusCode === 200) {
        console.log(result);
        localStorage.setItem("vendorId", result.data?.userId);
        localStorage.setItem("vendorusername", result.data?.username);
  
        alert(result.message);
        navigate("/dashboard");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login">
      <img className="wave" src="./assets/img/wave.png" alt="wave" />
      <div className="container">
        <div className="img">
          <img src="./assets/img/bg.svg" alt="background" />
        </div>
        <div className="login-content">
          <form onSubmit={loginVendor}>
            <img src="./assets/img/avatar.svg" alt="avatar" />
            <h2 className="title">Welcome</h2>
            <div className={`input-div one ${usernameFocused ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  onFocus={() => handleFocus(setUsernameFocused)}
                  onBlur={(e) => handleBlur(setUsernameFocused, e.target.value)}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className={`input-div pass ${passwordFocused ? 'focus' : ''}`}>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  onFocus={() => handleFocus(setPasswordFocused)}
                  onBlur={(e) => handleBlur(setPasswordFocused, e.target.value)}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendorlogin;