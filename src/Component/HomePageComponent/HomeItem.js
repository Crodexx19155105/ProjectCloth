import React from 'react'

function HomeItem({title,imageUrl,id}) {
    return (
        <div className="Outer_Container">
        <div style={{backgroundImage: `url(${imageUrl}) ` } }className="background-image" >
            <div  className="Inner_Container">
                <div style={{ fontSize:"26px" } }>{title.toUpperCase()}</div>
                <div>SHOP NOW</div>
            </div>
            
        </div>
        </div>
    )
}

export default HomeItem
