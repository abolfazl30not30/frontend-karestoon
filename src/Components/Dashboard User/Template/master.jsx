import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import MainUserPage from "../Pages/Main";
import ProjectUser from "../Pages/Project";
import UserAccount from "../Pages/Account"
import "../../../style/dashboard/dashboard.css"

function DashboardUser() {
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

export default DashboardUser