import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="v7_2">
                <div class="v15_10"></div>
                <span class="v15_12">WELCOME BACK!</span>
                <span class="v15_13">Email:</span><span class="v15_15">Password:</span>
                <div class="v15_14"></div>
                <div class="v15_16"></div><div class="v15_17"></div>
                <span class="v15_18">Log In</span>
                <span class="v15_25">Not a member? </span>
                <span class="v15_26">Sign Up Now!</span>
            </div>
         );
    }
}
 
export default Login;