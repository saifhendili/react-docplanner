import React from 'react'
import "./fifthstyle.css"
import icon from "./image/icon.jpg"
function fithsectioncontainer(props) {
    return (
        <div className="fifth-section-container">
            <div className="first-part-fifth-section">
            <h1 className="title-fifth-section">The world's biggest healthcare platform </h1>
            <p className="parag-fifth-section">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>
            <img className="image-fifth-sec" src={icon}/>
            </div>
        
        <div className="second-part-fifth-section">
            {
                props.card.map((el,i)=>
                    <div className={`card-fifth${i} card-fif-section`}>
                        {el.image}
                       <h1 className="title-card-fifth-secion"> {el.title}</h1>
                      <p1 className="paragraphe-card-fifth-secion"> {el.paragraphe}</p1>
                    </div>
                    
                    )
            }

        </div>
        </div>
    )
}
export default fithsectioncontainer