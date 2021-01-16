import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map.css'

export const Map = () => {
    return (
      <div className="map">
        <MapContainer center={[43.4723, -80.5449]} zoom={16.5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[43.4723, -80.5449]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
}
