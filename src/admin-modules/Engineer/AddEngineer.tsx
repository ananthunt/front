import { Button, Container, Input } from "@mui/material";
import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import'..//..//styles/common.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { Form, } from "react-bootstrap";

export default function AddEngineer(){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    }

    const handleOpen=() =>{
        setOpen(true);
    }
    return(
        <div>
            <div className="left-align">
            <Button className ="add-button" size="small" variant="contained" onClick={handleOpen} >Add Engineer</Button>
            </div>
            <div>
            <Offcanvas className="offcanvas-size"  show={open} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton className="offcanvas-header-text">Add Engineer</Offcanvas.Header>
                <Offcanvas.Body className="p-0">
                <div className="container">
                <div className="row">
                <form>
                    {/* Name & Email */}
                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder="Enter email ID" />
                    </div>
                    </div>

                    {/* Gender & DOB */}
                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Joined Date <span className="text-danger">*</span></label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label d-block fw-medium">Gender <span className="text-danger">*</span></label> 
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="genderMale" />
                        <label className="form-check-label" htmlFor="genderMale">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="genderFemale" />
                        <label className="form-check-label" htmlFor="genderFemale">Female</label>
                        </div>
                    </div>
                    
                    </div>

                    {/* Contact Number */}
                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Contact Number <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Enter mobile number" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-medium ">Department</label>
                        <select className="form-select">
                        <option>Select Type</option>
                        <option>Civil Engineer</option>
                        <option>Architect</option>
                        </select>
                    </div>
                    </div>

                    {/* Certifications & Image */}
                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Certifications</label>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Upload Image</label>
                        <input type="file" className="form-control" />
                    </div>
                    </div>

                    {/* Education & License */}
                    <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label fw-medium">Education</label>
                        <input type="text" className="form-control" placeholder="Enter qualification" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-medium">License Number</label>
                        <input type="text" className="form-control" placeholder="Enter license number" />
                    </div>
                    </div>

                    {/* Address */}
                    <div className="row mb-3">
                    <div className="col-md-12">
                        <label className="form-label fw-medium">Address</label>
                        <input type="text" className="form-control-address" placeholder="Enter address" />
                    </div>
                    </div>

                    {/* Country, State, City */}
                    <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label fw-medium ">Country</label>
                        <select className="form-select-city-country-state">
                        <option>Select country</option>
                        <option>India</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-medium">State</label>
                        <select className="form-select-city-country-state">
                        <option>Select state</option>
                        <option>Tamil Nadu</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-medium">City</label>
                        <select className="form-select-city-country-state">
                        <option>Select city</option>
                        <option>Chennai</option>
                        </select>
                    </div>
                    </div>

                    {/* Username & Password */}
                    <div className="row mb-4  gx-4">
                    <div className="col-md-4">
                        <label className="form-label fw-medium">
                        Username <span className="text-danger">*</span>
                        </label>
                        <input
                        type="text"
                        className="custom-input-credentials "
                        placeholder="Enter username"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-medium">
                        Password <span className="text-danger">*</span>
                        </label>
                        <input
                        type="password"
                        className=" custom-input-credentials "
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-medium">
                        Confirm Password <span className="text-danger">*</span>
                        </label>
                        <input
                        type="password"
                        className="custom-input-credentials"
                        placeholder="Re-enter password"
                        />
                    </div>
                    </div>

                    {/* Submit & Cancel Buttons */}
                    <div className="row">
                    <div className="col-12 d-flex justify-content-end gap-2">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="button" className="btn btn-secondary">Cancel</button>
                    </div>
                    </div>
                </form>
                </div>
                </div>


                </Offcanvas.Body>
            </Offcanvas>
            </div>
        </div>
    )
}