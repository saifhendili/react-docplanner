import React from 'react'
import "./laststylemain.css"
 function lastsectioncontainer(props) {
    return (
        <div className="last-section">
            <div className="first-part-last-section">
                <h1 className="title-last-section">Improve the lives of millions. Change yours forever </h1>
                <p className="paragraphe-last-section">More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops. </p>
            </div>
            <div className="image-button">
                {
                    props.card.map((el,i)=>
                        <a className="imgcard" href={el.lien}>
                       
                            {el.image}
                            <div className="image-container">
                                          <p className="textimg">{el.title}</p>
                                          <button className="buttonimg">{el.button}</button>
                            
                            </div>
                            </a>
                        )
                }
            </div>
           <div className="line">
               <hr />
           </div>
        </div>
    )
}
export default lastsectioncontainer