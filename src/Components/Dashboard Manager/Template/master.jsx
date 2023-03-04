import React from "react";
import Navbar from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import "../../../style/dashboard/dashboard.css"
import { Outlet } from "react-router-dom";

function DashboardManager() {
    return (
        <>
            <div className="d-flex flex-column" dir="rtl">
                <Sidebar />
                <Navbar />
                <div className="main">
                    <Outlet />
                </div>
                <Footer />

            </div>
        </>

    );
}

export default DashboardManager