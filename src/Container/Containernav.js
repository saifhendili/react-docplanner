import React from 'react'
import Navbara from './header/Nav'
const liste=[
    {title:"About us",lien:'#'},
    {title:"Career",lien:'#'},
    {title:"Departments",lien:'#',drop:[{titlenav:"Marketing & PR",lien:"#"},{titlenav:"Customer Success & Sales",lien:"#"},{titlenav:"IT,Product,Design & UX ",lien:"#"},{titlenav:"Finance & Administration",lien:"#"}]}
]
function Containernav() {
    return (
        <div>
            <Navbara liste={liste}/>
        </div>
    )
}
export default Containernav