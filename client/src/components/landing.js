import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="v8_12">
                <div class="v8_78"></div>
                <div class="v13_0"></div>
                <div class="v15_9"></div>
                <div class="v13_11"></div>
                <div class="v15_8"></div>
                <Link to="/login"><span class="v13_13">Login</span></Link>
                <Link to="/signup"><span class="v13_14">Sign Up</span></Link>
                <div class="v13_16"></div><div class="name"></div>
                <div class="name"></div>
                <div class="name"></div>
                <div class="name"></div>
            </div>
         );
    }
}
 
export default Landing;