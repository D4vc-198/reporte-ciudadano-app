import React from 'react'
import '../styles/sidebar.css'

//ICONOS
// import { TbRoad } from 'react-icons/tb'
// import { HiOutlineLightBulb } from 'react-icons/hi'
// import { MdOutlineWaterDrop } from 'react-icons/md'
import { FaMapMarkedAlt } from 'react-icons/fa'

//COMPONENTES
import SidebarCard from './SidebarCard'

//DATOS
import datosReportes from '../datosReportes'

const Sidebar = () => {
  // const [showDatosAgua, setShowDatosAgua] = useState(false)
  // const [showDatosCarretera, setShowDatosCarretera] = useState(false)
  // const [showDatosLuz, setShowDatosLuz] = useState(false)

  // const [sizeSeparatorAgua, setSizeSeparatorAgua] = useState(0)
  // const [sizeSeparatorAgua, setShowDatosLuz] = useState(0)
  // const [sizeSeparatorAgua, setShowDatosLuz] = useState(0)

  // //Funcion para abrir el panel Derecho
  // // const openSidePanel = () => {
  // //   document.getElementById('side-panel').style.width = '350px'
  // //   document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
  // // }

  // const separatorAgua = {
  //   width: '5px',
  //   borderRadius: '10px',
  //   height: '125px',
  //   backgroundColor: '#272A30',
  // }

  // const separatorCarretera = {
  //   width: '5px',
  //   borderRadius: '10px',
  //   height: '125px',
  //   backgroundColor: '#272A30',
  // }

  // const separatorLuz = {
  //   width: '5px',
  //   borderRadius: '10px',
  //   height: '125px',
  //   backgroundColor: '#272A30',
  // }

  // const mostrarDatosAgua = () => {
  //   setShowDatosAgua(!showDatosAgua)
  // }

  // const mostrarDatosCarretera = () => {
  //   setShowDatosCarretera(!showDatosCarretera)
  // }
  // const mostrarDatosLuz = () => {
  //   setShowDatosLuz(!showDatosLuz)
  // }
  return (
    <ul className="sidebar">
      <li className="sidebar-title">
        <FaMapMarkedAlt />
      </li>
      <div className="sidebar-card-container">
        <div className="sidebar-card-filter">
          <p className="sidebar-card-filter-txt">Filtrar por: </p>
          <label className="sidebar-card-filter-checkbox">
            <input type="checkbox" id="cbox1" value="agua" />
            Agua
          </label>
          <label className="sidebar-card-filter-checkbox">
            <input type="checkbox" id="cbox1" value="calle" />
            Calle
          </label>
          <label className="sidebar-card-filter-checkbox">
            <input type="checkbox" id="cbox1" value="luz" />
            Luz
          </label>
          <button>Aplicar</button>
        </div>
        <div className="sidebar-card-txt-resultado">
          <p>{datosReportes.length} resultados</p>
        </div>
        {datosReportes.map((data) => {
          if (data.name === 'location-agua') {
            return (
              <SidebarCard
                valueIcon={'agua-ico'}
                colorIco="5984FE"
                colorBgIco="F1F5FF"
                key={data.id}
                type={data.type}
                coordinates={data.location}
              />
            )
          } else if (data.name === 'location-luz') {
            return (
              <SidebarCard
                valueIcon={'luz-ico'}
                colorIco="FFAC2F"
                colorBgIco="FFF8EE"
                key={data.id}
                type={data.type}
                coordinates={data.location}
              />
            )
          } else if (data.name === 'location-carretera') {
            return (
              <SidebarCard
                valueIcon={'carretera-ico'}
                colorIco="FE60A2"
                colorBgIco="FFF1F7"
                key={data.id}
                type={data.type}
                coordinates={data.location}
              />
            )
          }
        })}
      </div>
    </ul>
  )
}

export default Sidebar

{
  /* <li>
<div className="li-item" onClick={mostrarDatosAgua}>
  <MdOutlineWaterDrop size={'1.5em'} />
  &nbsp;
  <span>Agua</span>
</div>
{showDatosAgua ? (
  <div className="sidebar-card-container">
    {datosReportes.map((data) => {
      if (data.name === 'location-agua') {
        return (
          <SidebarCard
            valueIcon={'agua-ico'}
            colorIco="5984FE"
            colorBgIco="F1F5FF"
            key={data.id}
            type={data.type}
          />
        )
      }
    })}
  </div>
) : null}
</li>
<li>
<div className="li-item" onClick={mostrarDatosCarretera}>
  <TbRoad size={'1.5em'} />
  &nbsp;
  <span>Carretera</span>
</div>
{showDatosCarretera ? (
  <div className="sidebar-card-container">
    {datosReportes.map((data) => {
      if (data.name === 'location-carretera') {
        return (
          <SidebarCard
            valueIcon={'carretera-ico'}
            colorIco="FE60A2"
            colorBgIco="FFF1F7"
            key={data.id}
            type={data.type}
          />
        )
      }
    })}
  </div>
) : null}
</li>
<li>
<div className="li-item" onClick={mostrarDatosLuz}>
  <HiOutlineLightBulb size={'1.5em'} />
  &nbsp;
  <span>Iluminación</span>
</div>
{showDatosLuz ? (
  <div className="sidebar-card-container">
    {datosReportes.map((data) => {
      if (data.name === 'location-luz') {
        return (
          <SidebarCard
            valueIcon={'luz-ico'}
            colorIco="FFAC2F"
            colorBgIco="FFF8EE"
            key={data.id}
            type={data.type}
          />
        )
      }
    })}
  </div>
) : null}
</li> */
}
