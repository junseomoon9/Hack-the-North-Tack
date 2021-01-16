import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
export const Signup = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitting Name ${name} ${lastName} 
        Email: ${email} ${password}`);
    }
    return (
        <div className="signupPage">
            <div className="header"></div>
            <span className="welcomeTitle">WELCOME TO TACK</span>

            <form onSubmit={handleSubmit}>
                <label>
                <span className="firstNLabel">First Name:</span>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={name}
                            onChange={e =>setName(e.target.value)}
                            className="firstNField"
                            />
                </label>
                <label>
                    <span className="lastNLabel">Last Name:</span>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={e =>setLastName(e.target.value)}
                            className="lastNField"
                            />
                </label>
                <label>
                    <span className="emailLabel">Email:</span>
                    <input
                        type="text"
                        placeholder="Email Here"
                        value={email}
                        onChange={e =>setEmail(e.target.value)} 
                        className="emailField"
                        />
                </label>
                <label>
                    <span className="passwordLabel">Password:</span>
                    <input
                        type="password"
                        value={password}
                        onChange={e =>setPassword(e.target.value)}
                        className="passwordField"
                        />
                </label>
                    
                    <input 
                        className="signupButton signupText" 
                        type="submit" 
                        value="Sign Up!"
                    />
                    
            </form>

            
            <div className="fbButton"></div>
            <span className="fbText">Log In Using Facebook</span>
            
            
            <span className="loginMember">Already a member?</span>
            <Link to='/login'>
                <span className="loginText">Log In Now!</span>
            </Link>
        </div>
    )
}