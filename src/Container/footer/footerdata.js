import React from 'react'
import Contfooter from './footercontainer'
const link =[
{country:"Poland",lien:"#"},
{country:"Turkey",lien:"#"},
{country:"Spain",lien:"#"},
{country:"Italy",lien:"#"},
{country:"Czech Republic",lien:"#"},
{country:"Mexico",lien:"#"},
{country:"Colombia",lien:"#"},
{country:"Brazil",lien:"#"},
{country:"Argentina",lien:"#"},
{country:"Chile",lien:"#"},
]
function footerdata() {
    return (
        <div>
            <Contfooter link={link}/>
        </div>
    )
}
export default footerdata