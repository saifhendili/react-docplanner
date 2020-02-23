import React from 'react'
import "./styleseconsection.css"

function secondsectioncontainer(props) {
    return (
        <div className="container">
            <div className="paragraphe-section2">
                     <p className="parag">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p> 
                      <p className="parag">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. </p>
            </div>
            <div className="card-container">
                {
                        props.card.map((el,i)=>
                        <div className={`cardnb${i}`}>
                        <h6 className={`title-card${i} title-card`}>{el.title}</h6>
                        <p className={`parag-card${i} parag-card`}>{el.parag}</p>
                        {!el.select?null:
                        <select className="select-card">
                        {
                        el.select.map(em=>
                            <option value={em.href}>
                                {em.title}
                            </option>
                            )
                        
                        }
                        
                        </select>
                        }
                     <div className={`image-card${i}`}>  {el.image}</div>

                        </div>
                    )
                    }
            </div>
            </div>
       
    )
}
export default  secondsectioncontainer