//CSS
import './styles/App.css'
// import SidePanel from './components/SidePanel'
import Sidebar from './components/Sidebar'
import './styles/Map.css'

//Components
import MapView from './components/MapView'

const App = () => {
  return (
    <>
      <div className="sidebarCont">
        <Sidebar />
      </div>
      <div className="main">
        <MapView />
      </div>
    </>
    // <div className="container">
    //   <Sidebar />
    //   <div className="content">
    //     {/* <MapView /> */}
    //     <div className="map-container">
    //       <MapView />
    //     </div>
    //     <SidePanel />
    //   </div>
    // </div>
  )
}

export default App
