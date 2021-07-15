import React from 'react'
import ShopItem from './ShopItem'

function ShopLists({title,items}) {
    return (
        <div>
            <div style={{fontSize:"30px",fontWeight:"bold"}}>{title}</div>
            <br/>
            <div className="Item_GridContainer">
                
            {items.map((prod)=>
            (prod.id<=4) &&<ShopItem key={prod.id} {...prod}/>)}
            


            </div>
            <br/>
            <br/>
            
        </div>
    )
}

export default ShopLists
