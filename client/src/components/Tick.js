import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './tick.css'

export const Tick = ({coord, location, course, seats, description}) => {
    return (
        <Marker position={[coord.lat, coord.lon]}>
            <Popup>
              <h2>{location}</h2>
              <p className="intro">I'm studying {course} and there's {seats} seats available!</p>
              <p className="description">{description}</p>
            </Popup>
        </Marker>
    )
}
