import React from 'react'
import {Link} from 'react-router-dom';
import './Login.css'
import tacklogo from '../images/tacklogo.png'

export const Login = () => {
  return (
    <div className="login">
        <div className="img-container">
        <img src={tacklogo} alt="tacklogo"/>
        </div>
      <div login-container>
        <div className="inner-login-container">
          <h2 className="login-title">Login</h2>
          <form>
            <label className="email">
              <p>Email</p>
              <input type="text" />
            </label>
            <label className="password">
              <p>Password</p>
              <input type="password" />
            </label>
            <div className="submit">
              <Link to="/frontpage"><button type="submit">Login</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
