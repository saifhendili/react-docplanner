import React from 'react'
import "./style.css"
function thirdsection(props) {
    return (
        <div className="thirdsection">
{
    props.svgimg.map(el=>
       <div>{el.paragraphe?<h1 className="parag-third-sec">{el.paragraphe}</h1>:null}
       <div>
           {!el.image1?null:<a href={el.lien1}> { el.image1}</a>}
           {!el.image2?null:<a href={el.lien2}> { el.image2}</a>}
       </div>
       </div>
       )
}

        </div>
    )
}
export default  thirdsection