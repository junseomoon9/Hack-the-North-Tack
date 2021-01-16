import React from 'react'
import './Login.css'

export const Login = () => {
    return (
        <div className="login">
            <div className = "title">
            <div className="welcome"> Welcome to Tack!</div>
            </div>
            <form>
            <label className="email">
                 <p>Email</p>
                <input type="text" />
            </label>
            <label className="password">
                 <p>Password</p>
                <input type="password" />
             </label>
            <div className = "submit">
                <button type="submit">Submit</button>
             </div>
             </form>
        </div>

        
    )
}
