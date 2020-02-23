import React from 'react'
import './footerstyle.css'
function footercontainer(props) {
    return (
        <div className="style-footer">
           <div className="container-footer">
             <p className="last-footer">We are leaders in 10 countries: </p>
             <div className="countrylien">
                {
                props.link.map((el,i)=>
                <div>
             <p>  <a className="lienfooter" href={el.lien}> {el.country}</a>{ i==8?<span> and </span> :i==9?null:<span> , </span>} </p>    
                </div>
                )}
                </div>
                </div>
                     <p className="para-footer">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
        </div>
    )
}
export default footercontainer;