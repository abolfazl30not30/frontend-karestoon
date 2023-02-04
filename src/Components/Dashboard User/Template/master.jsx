import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import MainUserPage from "../Pages/main";
import ProjectUser from "../Pages/Payment";
import UserAccount from "../Pages/account"
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