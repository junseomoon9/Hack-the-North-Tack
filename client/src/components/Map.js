import React, {useState} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Tick} from './Tick'
import './map.css'

export const Map = ({markers}) => {

    return (
      <div className="map">
        <MapContainer
          center={[43.4723, -80.5449]}
          zoom={16.5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Tick coord={marker.coord} location={marker.location} course={marker.course} seats={marker.seats} description={marker.description} />
          ))}
          
        </MapContainer>
      </div>
    );
}
