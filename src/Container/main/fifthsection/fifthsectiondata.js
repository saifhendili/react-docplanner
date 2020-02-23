import React from 'react'
import Fifthsectioncontainer from "./fithsectioncontainer"
 import image1 from "./image/card1.png"
 import image2 from "./image/card2.png"
 import image3 from "./image/card3.png"
 import image4 from "./image/card4.png"
 
const card=[
    {
        image:<img  src={image1}/>,
        title:"Leader in 10 countries",
        paragraphe:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile "
    },
    {
        image:<img  src={image2}/>,
        title:"1.5 million appointments",
        paragraphe:"booked last month  "
    },
    {image:<img  src={image3}/>,
    title:"30 million unique patients",
    paragraphe:"visit us every month" },
    {image:<img  src={image4}/>,
    title:"2 million active doctors",
    paragraphe:"trust in our solutions"
}
]
function fifthsectiondata() {
    return (
        <div>
            <Fifthsectioncontainer card={card} />
        </div>
    )
}
export default fifthsectiondata