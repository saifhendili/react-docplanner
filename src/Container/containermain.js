import React from 'react'
import Firstsection from"./main/firstsection/mainsection1"
import Secondsection from "./main/second-section/mainsection2"
import Thirdsection from"./main/thirdsection/thirdsectiondata"
import Firstsectionn from"./main/fifthsection/fifthsectiondata"
import Lastsectionn from './main/lastsection/lastsectiondata'
function containermain() {
    return (
        <div>
           <Firstsection /> 
           <Secondsection/>
           <Thirdsection />
           <Firstsectionn />
           <Lastsectionn />
        </div>
    )
}
export default containermain