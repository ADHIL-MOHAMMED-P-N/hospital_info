import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import React , {useState} from 'react'
import SideNav from "./components/SideNav/SideNav";
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
function App() {
  const [showNav,setShowNav] = useState(false)
 
  return (
    <div className="App">
      <TopNav />

        {
          showNav ? <GrClose className="hamburger" onClick={()=>{setShowNav(!showNav)}} /> : <GiHamburgerMenu className="hamburger" onClick={()=>{setShowNav(!showNav)}}/>
        }
         <SideNav show={showNav}/>

      </div>
  );
}

export default App;

{
  /* topnav
      sidenav
      incident details
      type of incident 
      incident category 
      person affected
      incident description
      contributing factors
      preventability of incident
      immediate action taken 
      incident wintnessed by */
}
