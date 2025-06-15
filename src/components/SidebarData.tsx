import React from "react";
import '../styles/sidebar.css';
import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  BarChart3, 
  Package,
  X,
  Menu,
  UserPlus,
  Building,
  Handshake,
  Settings,
  PersonStanding

} from "lucide-react";
interface SidebarItem{
    title:string,
    icon:React.ElementType,
    link:string
    color?:string
    
}

export const sidebarItems: SidebarItem[]=[
    {
        title:"Dashboard",
        icon:LayoutDashboard,
        link:"/",
        color:"text-violet-500"
    },
     {
        title:"Engineer Managment",
        icon:UserPlus,
        link:"/engineer",
        color:"text-emerald-600"
    },
     {
        title:"Contractor Managment",
        icon:UserPlus,
        link:"/contractor",
        color:"text-orange-600"
    },
     {
        title:"Project",
        icon:Building2,
        link:"/project",
        color:"text-blue-500"
    },
     {
        title:"Inventory",
        icon:Package,
        link:"/inventory" ,
        color:"text-rose-500" 
    },
     {
        title:"Vendor Managment",
        icon:Handshake,
        link:"/vendor",
        color:"text-yellow-500"
    },
     {
        title:"Reports",
        icon:BarChart3,
        link:"/report",
        color:"text-amber-500"
    },
    {
        title:"HR Managment",
        icon:PersonStanding,
        link:"/hr",
        color:"text-red-500"
    },
    {
        title:"Settings",
        icon:Settings,
        link:"/settings",
        color:"text-blue-500"
    }
]
