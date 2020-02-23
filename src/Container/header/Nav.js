import React from 'react'
import image from './image/logo.png'
import './styleheader.css'
 function Nav(props) {
    return (
        <div className="header">
            <img className="logo" src={image} alt="logo"/>
        <ul className="nav">
           { 
        props.liste.map((el,i)=>
      <li className={el.drop?`have-drop liste liste${i}`:`havnt liste liste${i}`}>
    <a href={el.lien}className={`lien${i} lien-drop`}> {el.title}</a>  
{
!el.drop?null:
<ul class="dropdown">
{
  el.drop.map(el=><li className="liste-drop"><a href={el.lien} className="lien-navbarre lien-dropdown">{el.titlenav}</a></li>)
}

</ul>
  


}
        </li>
        
        )
        }
      </ul>
      </div> 
    )
}
export default Nav ;