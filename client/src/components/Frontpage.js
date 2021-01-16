import React from 'react'
import {Map} from './Map'
import './frontpage.css'

export const Frontpage = () => {
    return (
      <div className="frontpage">
        <div className="nav-bar-container">
          <div className="nav-bar"></div>
        </div>

        <div className="panel">
          <div className="inner-panel">
            <h2>Add your meetup spot:</h2>
            <div className="add-marker-form">
                <form>
                    <p>Location</p>
                    <input className="location-input" type="text" name="name" placeholder=""/>
                    <p>Course code</p>
                    <input className="coursecode-input" type="text" name="name" placeholder=""/>
                    <p>Available Seats</p>
                    <input className="seats-input" type="text" name="name" placeholder=""/>
                    <p>Add Description</p>
                    <input className="seats-input" type="text" name="name" placeholder=""/>
                </form>
            </div>
          </div>
        </div>
        <Map />
      </div>
    );
}
