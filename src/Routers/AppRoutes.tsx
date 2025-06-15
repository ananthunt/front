import React from "react"
import { Routes, Route } from "react-router-dom"
import { EngineerList } from "../admin-modules/Engineer/EngineerList"
import { ContractorList } from "../admin-modules/Contractor/ContractorList"
import { VendorList } from "../admin-modules/Vendor/VendorList"
import { Home } from "../admin-modules/Dashboard/Home"
import { WorkerList } from "../admin-modules/Hr/WorkerList"
import { InventoryList } from "../admin-modules/Inventory/InvendoryList"
import { ProjectList } from "../admin-modules/Projectmanagement/ProjectList"
import { ListReport } from "../admin-modules/Report/ListReport"
import { SettingsDetails } from "../admin-modules/Settings/settings"
import EngineerView from "../admin-modules/Engineer/EngineerDetails"
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/engineer" element={<EngineerList />} />
            <Route path="/contractor" element={<ContractorList />} />
            <Route path="/vendor" element={<VendorList />} />
            <Route path="/hr" element={<WorkerList />} />
            <Route path="/inventory" element={<InventoryList />} />
            <Route path="/project" element={<ProjectList />} />
            <Route path="/report" element={<ListReport />} />
            <Route path="/settings" element={<SettingsDetails />} />
            <Route path="/EngineerDetails/:id" element={<EngineerView />} />
        </Routes>
    )
}