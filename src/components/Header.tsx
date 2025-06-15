import React from "react";
import '../styles/header.css';
import { Bell } from "lucide-react";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors";

export function Header(){
    return(
       <div className="header">
      <div className="header-left">
      </div>
      <div className="header-right">
       
        <Bell className="icon" />
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </div>
    </div>
    )
}