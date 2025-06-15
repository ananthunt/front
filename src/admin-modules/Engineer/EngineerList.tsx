import React from "react";
import '../../styles/common.css';
import AddEngineer from "./AddEngineer";
import { useNavigate } from "react-router-dom";

export function EngineerList() {
    const navigaton =useNavigate();
    const handleRowClick=(id:string)=>{
        navigaton(`/EngineerDetails/${id}`,{state:Engineers})
    }
    interface Engineer{
        id: string;       
        name: string;
        email: string;
        joinedDate: string;
        mobile: string;
        department: string;
        status: string;
    }
    const Engineers:Engineer[]=[
        {
        id: "ENG1001",
            name: "John Doe",
            mobile: "9876543210",
            email: "john.doe@example.com",
            department: "Mechanical",
            joinedDate: "19 May 2025",
            status: "Active",
        },
        {
            id: "ENG1002",
            name: "Jane Smith",
            mobile: "8765432109",
            email: "jane.smith@example.com",
            department: "Electrical",
            joinedDate: "15 May 2025",
            status: "Active",
        },
        {
            id: "ENG1003",
            name: "Alex Brown",
            mobile: "7654321098",
            email: "alex.brown@example.com",
            department: "Software",
            joinedDate: "14 May 2025",
            status: "Inactive",
        },
    ]

    
    return (
        <div className="container_card"> 
            <div className="card">
                <div className="offcanvas-button">
                    <AddEngineer/>
                </div>
                
                <h2>Engineer List</h2>
                <div className="table-controls">
                    <select>
                        <option>Select Department</option>
                        <option>Mechanical</option>
                        <option>Electrical</option>
                        <option>Software</option>
                    </select>
                    <select>
                        <option>Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Engineer ID</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Department</th>
                                <th>Joined Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                       <tbody>
                        {Engineers.map((engineer, index) => (
                            <tr
                            key={engineer.id}
                            onClick={() => handleRowClick(engineer.id)}
                            style={{ cursor: "pointer" }}
                            >
                            <td>{index + 1}</td>
                            <td>{engineer.id}</td>
                            <td>{engineer.name}</td>
                            <td>{engineer.mobile}</td>
                            <td>{engineer.email}</td>
                            <td>{engineer.department}</td>
                            <td>{engineer.joinedDate}</td>
                            <td>{engineer.status}</td>
                            <td>
                                :
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}