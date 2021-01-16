import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
export const Signup = () => {
    return (
        <div className="signupPage">
            <div className="header"></div>
            <span className="welcomeTitle">WELCOME TO TACK</span>
            
            <span className="lastNLabel">Last Name:</span>
            <span className="emailLabel">Email:</span>
            <span className="passwordLabel">Password:</span>
            <span className="firstNLabel">First Name:</span>
            <div className="firstNField"></div>
            <div className="lastNField"></div>
            <div className="emailField"></div>
            <div className="passwordField"></div>
            <div className="loginButton"></div>
            <div className="fbButton"></div>
            <span className="fbText">Log In Using Facebook</span>
            <span className="signupText">Sign Up</span>
            
            <span className="loginMember">Already a member?</span>
            <Link to='/login'>
                <span className="loginText">Log In Now!</span>
            </Link>
        </div>
    )
}