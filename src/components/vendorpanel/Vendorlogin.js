import React, { useState } from 'react';

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

  

  return (
    <div className="login">
      <img className="wave" src="./assets/img/wave.png" alt="wave" />
      <div className="container">
        <div className="img">
          <img src="./assets/img/bg.svg" alt="background" />
        </div>
        <div className="login-content">
          <form action="index.html">
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
                />
              </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendorlogin;