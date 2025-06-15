import React from "react";
import '../../styles/common.css'
import AddInvendory from '../Inventory/AddInvendory'
export function  InventoryList(){
    return(
        <div className="container_card">
            <div className="card">
                <AddInvendory/>
                <h1>InventoryList</h1></div>
        </div>
    )
}