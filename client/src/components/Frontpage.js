import React, {useState, useContext} from 'react'
import {Map} from './Map'
import './frontpage.css'
import tacklogo from '../images/tacklogo.png'
import {GlobalContext} from './context/GlobalContext'

export const Frontpage = () => {

    const {markers, addMarkerToMarkers, removeMarkerToMarkers} = useContext(GlobalContext)

    const buildingsCoordinates = [
        {name: "Douglas Wright Engineering Building", coord: {lat: 43.47007, lon: -80.5397}},
        {name: "Engineering 2", coord: {lat: 43.47104345, lon: -80.54041224}},
        {name: "Engineering 3", coord: {lat: 43.4717442, lon: -80.54086285}},
        {name: "Physics", coord: {lat: 43.47084805, lon: -80.54153806}},
        {name: "Modern Languages", coord: {lat: 43.46909688, lon: -80.54287987}},
        {name: "Dana Porter Arts Library", coord: {lat: 43.46984437, lon: -80.54242926}}]

    const [id, setId] = useState(1);
    const [location, setLocation] = useState("");
    const [course, setCourse] = useState("");
    const [seats, setSeats] = useState(0);
    const [description, setDescription] = useState("");

    const updateLocation = e => {
        setLocation(e.target.value);
    }
    const updateCourse = e => {
        setCourse(e.target.value);
    }
    const updateSeats = e => {
        setSeats(e.target.value);
    }
    const updateDescription = e => {
        setDescription(e.target.value);
    }

    const addMarker = e => {
        e.preventDefault();
        let coord = {lat: 0, lon: 0};
        for ( let i=0; i< buildingsCoordinates.length; i++){
            let building = buildingsCoordinates[i];
            if (location.toLowerCase() === building.name.toLowerCase()){
                coord = building.coord;
            }
        }
        const marker = {id: id, location: location, course: course, seats: seats, description: description, coord: coord};
        addMarkerToMarkers(marker)
        setLocation("")
        setCourse("")
        setDescription("")
        setSeats(0);
        
    }

    return (
      <div className="frontpage">
        <div className="nav-bar-container">
            
          <div className="nav-bar">
          <img className="tacklogo-img" src={tacklogo} alt="tacklogo"/>
          </div>
        </div>

        <div className="panel">
          <div className="inner-panel">
            <h2>Add your meetup spot:</h2>
            <div className="add-marker-form">
                <form onSubmit={addMarker}>
                    <p>Location</p>
                    <input onChange={updateLocation} className="location-input" type="text" name="location" placeholder=""/>
                    <p>Course code</p>
                    <input onChange={updateCourse} className="coursecode-input" type="text" name="course"  placeholder=""/>
                    <p>Available Seats</p>
                    <input onChange={updateSeats} className="seats-input" type="text" name="seats" placeholder=""/>
                    <p>Add Description</p>
                    <textarea onChange={updateDescription} cols="33" rows="4" className="description-input" type="text" name="description" placeholder=""/>
                    <button type="submit" className="add-marker-btn">
                        Add
                    </button>
                </form>
            </div>
            <h2>Finished Studying?</h2>

            <button onClick={() => removeMarkerToMarkers(id)} type="button" className="remove-marker-btn">
                Remove Marker
            </button>
          </div>
        </div>
        <Map markers={markers} />
      </div>
    );
}
