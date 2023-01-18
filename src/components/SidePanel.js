import React from 'react'
import '../styles/sidePanel.css'
import { AiOutlineClose } from 'react-icons/ai'

const SidePanel = () => {
  //Funcion para cerrar el panel derecho
  const closeSidePanel = () => {
    document.getElementById('side-panel').style.width = '0px'
    document.body.style.backgroundColor = 'white'
  }
  return (
    <div id="side-panel" className="side-panel">
      <div className="close-button" onClick={closeSidePanel}>
        <AiOutlineClose color="white" />
      </div>
    </div>
  )
}

export default SidePanel
