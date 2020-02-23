import React from 'react'
import  Secondsectionn from "./secondsectioncontainer"
import Imageforpat from "./image/image1.png"
import Imagefordoc from "./image/image2.png"
const card=[
    {
    title:"For patients" ,
    parag:"Find a doctor, book a visit and solve any health-related doubt",
    select:[{title:"CHOOSE COUNTRY",href:"#"},
    {title:"tunisia",href:"#"},
    {title:"algerie",href:"#"}
    ],
    image:<img src={Imageforpat} height="190px"/>
    },
    {
        title:"For doctors" ,
        parag:"Save time managing visits and cut no-shows by half",
        image:<img src={Imagefordoc} height="190px"/>
       
    }
    ]
 function mainsection2() {
    return (
        <div>
            <Secondsectionn card={card}/>
        </div>
    )
}
export default mainsection2;