//ESTE COMPONENTE FUNCIONA CON LEAFLET
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

//Latitud: 20.30851 | Longitud: -89.414208
const MapLeaflet = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapLeaflet
