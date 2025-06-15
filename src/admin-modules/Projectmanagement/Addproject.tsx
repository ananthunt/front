import React, { useState } from "react";
import { Button,  } from "@mui/material";
import { Offcanvas } from "react-bootstrap";
import '../../styles/common.css'
export default function AddProject(){
    const [onshow,setOpen] =useState(false)

    const onModalOpen=()=>{
        setOpen(true)
    }
    const onModalClose=()=>{
        setOpen(false)
    }
    return(
    <div>

        <div className="left-align">
        <Button className ="add-button" size="small" variant="contained" onClick={onModalOpen} >Add Project</Button>
        </div>
        <Offcanvas show={onshow} onHide={onModalClose} placement="end"> 
            <Offcanvas.Header closeButton>Add Project</Offcanvas.Header>
        </Offcanvas>

    </div>
    )
}