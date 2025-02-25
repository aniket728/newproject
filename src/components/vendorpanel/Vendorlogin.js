import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_url } from '../../helpers/api_helper';

const Vendorlogin = () => {
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [icon, setIcon] = useState('fa-eye-slash');
  const [type, setType] = useState('password');

  const navigate = useNavigate();
  const vName = localStorage.getItem('vendorusername');

  useEffect(() => {
    if (vName) {
      navigate('');
    }
  }, [navigate, vName]);

  const handleFocus = (setFocus) => {
    setFocus(true);
  };

  const handleBlur = (setFocus, value) => {
    if (value === '') {
      setFocus(false);
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon('fa-eye');
      setType('text');
    } else {
      setIcon('fa-eye-slash');
      setType('password');
    }
  };

  const vendorlogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch(`${api_url}/api/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
console.log(result)
      if (result.statusCode === 200) {
        localStorage.setItem('vendorId', result.data?.userId);
        localStorage.setItem('vendorusername', result.data?.username);
        localStorage.setItem('companyId', result.data?.companyId);
        alert(result.message);
        navigate('/dashboard');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
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
          <form onSubmit={vendorlogin}>
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
                  type={type}
                  className="input"
                  onFocus={() => handleFocus(setPasswordFocused)}
                  onBlur={(e) => handleBlur(setPasswordFocused, e.target.value)}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="eye-icon" onClick={handleToggle}>
                  <i className={`fas ${icon}`} style={{ paddingTop:"21px"}}></i>
                </span>
              </div>
            </div>
            {/* <a href="#">Forgot Password?</a> */}
                <p className="signup-link">
              Don't have an account? <Link to="/vendorregister">Sign up</Link>
            </p>
            <button type="submit" className="btn">
              Login
            </button>

            {/* Add "Don't have an account? Sign up" link */}
        

            {/* Add social media icons */}
            {/* <div className="social-icons">
              <p>Or connect with:</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div> */}
          </form>
        </div>
      </div>
      <style>
        {
          `/* Add this to your CSS file */
.signup-link {
  text-align: center;
  margin-top: 15px;
}

.signup-link a {
  color: blue;
  text-decoration: underline;
}

.signup-link a:hover {
  text-decoration: underline;
  color:black;
}

.social-icons {
  text-align: center;
  margin-top: 20px;
}

.social-icons p {
  margin-bottom: 10px;
}

.social-icons a {
  color: #333;
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;
}

.social-icons a:hover {
  color: green;
}`

        }
      </style>
    </div>
  );
};

export default Vendorlogin;