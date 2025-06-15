import React from "react";
import { useLocation, useParams } from "react-router-dom";


export default function EngineerView(){
    const {id} = useParams();
    const data  =useLocation();
    const engineer =data.state;
    return(
        <div>
        <h1>
            Engineer id ={id}</h1>
        </div>
    )
}