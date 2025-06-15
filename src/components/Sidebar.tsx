import React from 'react'
import '../styles/sidebar.css';
import { sidebarItems } from './SidebarData';
export function Sidebar(){
    return (
    <div className="sidebar">
      <ul className="SidebarList">
        {sidebarItems.map((item, index) => (
          <li 
            key={index}
            onClick={() => (window.location.pathname = item.link)}
            className="sidebar-row"
          >
            <item.icon className={item.color} size={20}/>
            <span className="">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
    )
}