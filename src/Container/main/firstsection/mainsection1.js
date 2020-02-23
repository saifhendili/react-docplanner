import React from 'react'
import logo from'./image/sygnet.png'
import './mainstyle.css'
function mainsection1() {
    return (
        <div className="firstcontainerstyle">
            <img src={logo}alt='logo'/>
            <h1 className="title-section1">Making the healthcare experience more human</h1>
        </div>
    )
}
export default mainsection1;