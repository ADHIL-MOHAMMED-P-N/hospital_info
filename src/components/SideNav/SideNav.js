import React from 'react'
import {SideBarData} from './SideNavData'
import './SideNav.css'
const Sidenav = () => {
    return(
    <div className="sidebar">
        <ul className='sidebar-list'>
        {SideBarData.map((data,key)=>{
            const {name,link} = data
            return(
                <li className="sidebar-link" key={key}>{name}</li>
            )
})}
        </ul>
        
    </div>
        
    )
}
export default Sidenav