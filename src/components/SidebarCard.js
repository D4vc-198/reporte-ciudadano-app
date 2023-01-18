import React, { useEffect, useState } from 'react'

//ICONOS
import { FaRoad, FaLightbulb } from 'react-icons/fa'
import { BsDropletFill } from 'react-icons/bs'

//COLORES
// rosa TEXTO '#FE60A2,
// rosa FONDO '#FFF1F7'
// azul TEXTO '#5984FE'
// azul FONDO '#F1F5FF'
// amarillo TEXTO '#FFAC2F'
// amarillo FONDO '#FFF8EE'
// API https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAbPfcVZcF6UsuIOHGRkY4_GFM-BUebLjo
const SidebarCard = (props) => {
  const { valueIcon, colorIco, colorBgIco, type, coordinates } = props
  const [calle, setCalle] = useState('')
  const sidebarItemIco = {
    color: `#${colorIco}`,
    background: `#${colorBgIco}`,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
  }

  const sidebarItemType = {
    color: `#${colorIco}`,
    background: `#${colorBgIco}`,
    padding: '2px 5px',
    borderRadius: '5px',
  }

  //data.results[0].address_components)
  const fetchData = async () => {
    return await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=KEY-GOOGLE-CLOUD`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          setCalle({
            direccion: data.results[0].address_components[1].long_name,
            colonia: data.results[0].address_components[2].long_name,
            ubicacion: `${data.results[0].address_components[3].long_name},
            ${data.results[0].address_components[4].long_name},
            ${data.results[0].address_components[5].long_name}`,
            status: data.status,
          })
        }
      })
  }

  const getCoordinates = () => {
    console.log('coordenadas', coordinates)
  }
  useEffect(() => {
    fetchData()
  }, [calle, setCalle])

  const selectIcon = () => {
    if (valueIcon == 'carretera-ico') {
      return <FaRoad className="sidebar-item-icon-svg" />
    } else if (valueIcon == 'agua-ico') {
      return <BsDropletFill className="sidebar-item-icon-svg" />
    } else if (valueIcon == 'luz-ico') {
      return <FaLightbulb className="sidebar-item-icon-svg" />
    }
  }

  return (
    <div className="sidebar-item" onClick={getCoordinates}>
      <div className="sidebar-item-ico-direccion-container">
        <div className="sidebar-item-icon-container">
          <div style={sidebarItemIco}>{selectIcon()}</div>
        </div>
        <div className="sidebar-item-direccion-container">
          <p className="sidebar-item-txt-calle">{calle.direccion}</p>
          <p className="sidebar-item-txt-colonia">{calle.colonia}</p>
          <p className="sidebar-item-txt-colonia">{calle.ubicacion}</p>
        </div>
      </div>
      <div className="sidebar-item-type">
        <div style={sidebarItemType}>{type}</div>
      </div>
    </div>
  )
}

export default SidebarCard
