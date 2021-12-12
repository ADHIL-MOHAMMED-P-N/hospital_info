import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import React , {useState} from 'react'
import SideNav from "./components/SideNav/SideNav";
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  const [showNav,setShowNav] = useState(false)
  return (
    <div className="App">
      <TopNav />
      <div className="main">
        {
         showNav && <SideNav />
        }
        
        <MenuIcon  fontSize="large" className="hamburger" onClick={()=>{setShowNav(!showNav)}}/>
      </div>
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
