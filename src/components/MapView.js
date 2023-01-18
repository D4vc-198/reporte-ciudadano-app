// ESTE COMPONENTE FUNCIONA MEDIANTE GOOGLE MAPS
import React from 'react'

//DEPENDENCIAS
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import MapDesign from '../components/MapDesign'

//ICONOS
import CARRETERA_ICO from '../Assets/CALLE_ICO.png'
import LUZ_ICO from '../Assets/LUZ_ICO.png'
import AGUA_ICO from '../Assets/AGUA_ICO.png'

//Styles
import '../styles/Map.css'

//DATOS
import datosReportes from '../datosReportes'

const MapView = () => {
  const LIMITS_CITY = {
    north: 20.345602, //LAT NORTE
    south: 20.281741, //LAT SUR
    west: -89.447976, // LON OESTE
    east: -89.373568, //LON ESTE
  }

  const CENTER = { lat: 20.30851, lng: -89.414208 }
  let zoom = 0

  // const onMarkerClick = (evt) => {
  //   //toFixed(4))
  //   console.log(id)
  // }
  const mapOptions = {
    center: CENTER,
    restriction: {
      latLngBounds: LIMITS_CITY,
      strictBounds: true,
    },
    zoom: zoom, //7
    styles: MapDesign,
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAbPfcVZcF6UsuIOHGRkY4_GFM-BUebLjo',
  })

  if (!isLoaded) return <div>Cargando...</div>
  return (
    <GoogleMap options={mapOptions} mapContainerClassName="map-container">
      {datosReportes.map((marker) => {
        if (marker.name == 'location-carretera') {
          return (
            <div key={marker.id}>
              <MarkerF
                position={marker.location}
                options={{
                  icon: CARRETERA_ICO,
                }}
              />
            </div>
          )
        } else if (marker.name == 'location-agua') {
          return (
            <div key={marker.id}>
              <MarkerF
                // onClick={onMarkerClick}
                position={marker.location}
                options={{
                  icon: AGUA_ICO,
                }}
              />
            </div>
          )
        } else if (marker.name == 'location-luz') {
          return (
            <div key={marker.id}>
              <MarkerF
                position={marker.location}
                options={{
                  icon: LUZ_ICO,
                }}
              />
            </div>
          )
        }
      })}
    </GoogleMap>
  )
}

export default MapView

/* DINAMIC ICON */
/* <GoogleMap options={mapOptions} mapContainerClassName="map-container">
{markers.map((marker) => {
  if (marker.name == 'CARRETERA') {
    return (
      <div key={marker.name}>
        <MarkerF
          position={marker.location}
          options={{
            icon: CARRETERA_ICO,
          }}
        />
      </div>
    )
  } else if (marker.name == 'AGUA') {
    return (
      <div key={marker.name}>
        <MarkerF
          position={marker.location}
          options={{
            icon: AGUA_ICO,
          }}
        />
      </div>
    )
  } else if (marker.name == 'LUZ') {
    return (
      <div key={marker.name}>
        <MarkerF
          position={marker.location}
          options={{
            icon: LUZ_ICO,
          }}
        />
      </div>
    )
  }
})}
</GoogleMap> */
