import React from 'react'
import Lastsection from './lastsectioncontainer'
import warsaw from './image/warsaw.png'
import barcelone from './image/barcelona.png'
import istanbul from './image/istanbul.png'
import rome from './image/rome.png'
import mexicocity from './image/mexico-city.png'
import curitiba from './image/curitiba.png'
const card=[
    {
        lien:"#",
        title:"warsaw",
        image: <img width ="280px"src={warsaw}/>,
        button:"see option"
    },
    {
        lien:"#",
        title:"barcelone",
        image: <img width ="280px"src={barcelone}/>,
        button:"see option"
    },
    {
        lien:"#",
        title:"istanbul",
        image: <img width ="280px"src={istanbul}/>,
        button:"see option"
    },
    {
        lien:"#",
        title:"mexico city",
        image: <img width ="280px"src={mexicocity}/>,
        button:"see option"
    },
    {lien:"#",
    title:"rome",
    image: <img width ="280px"src={rome}/>,
    button:"see option"},
    
    {lien:"#",
    title:"curitiba",
    image: <img width ="280px"src={curitiba}/>,
    button:"see option"}
]
function lastsectiondata() {
    return (
        <div>
          <Lastsection card={card}/>  
        </div>
    )
}
export default lastsectiondata