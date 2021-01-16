import React from 'react'
import './Login.css'

export const Login = () => {
    return (
        <div className="welcome">
            <h1> Welcome to Tack!</h1>
            <label>
                 <p>Email</p>
                <input type="text" />
            </label>
            <label>
                 <p>Password</p>
                <input type="password" />
             </label>
            <div>
                <button type="submit">Submit</button>
             </div>
        </div>

        
    )
}
