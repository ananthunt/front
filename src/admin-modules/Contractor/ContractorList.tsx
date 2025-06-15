import React from "react";
import '../../styles/common.css';
import AddContractor from '../Contractor/AddContractor'
export function ContractorList() {
    return (
        <div className="container_card"> 
            <div className="card">
                <AddContractor/>
                <h2>Contractor List</h2>
                <div className="table-controls">
                    <select>
                        <option>Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <input type="text" placeholder="Search Contractor" />
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Contractor ID</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Assigned Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>CTR1001</td>
                                <td>
                                    <img src="avatar.png" alt="avatar" className="avatar" /> Mark Thomas
                                </td>
                                <td>9876543210</td>
                                <td>mark.thomas@example.com</td>
                                <td>05 June 2025</td>
                                <td><span className="status active">Active</span></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CTR1002</td>
                                <td>
                                    <img src="avatar.png" alt="avatar" className="avatar" /> Rita Johnson
                                </td>
                                <td>8765432109</td>
                                <td>rita.johnson@example.com</td>
                                <td>03 June 2025</td>
                                <td><span className="status active">Active</span></td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CTR1003</td>
                                <td>
                                    <img src="avatar.png" alt="avatar" className="avatar" /> Leo Patel
                                </td>
                                <td>7654321098</td>
                                <td>leo.patel@example.com</td>
                                <td>28 May 2025</td>
                                <td><span className="status inactive">Inactive</span></td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
