import React from "react";
import Navbar from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Main from "../Pages/main";
import Payment from "../Pages/Payment";
import Account from "../Pages/account"
import CreateCrowdFunding from "../Pages/CreateCrowdFunding";
import "../../../style/dashboard/dashboard.css"

function DashboardAdmin() {
    return (
        <>
            <div className="d-flex flex-column" dir="rtl">
                <Sidebar />
                <Navbar />
                <div className="main">
                    <CreateCrowdFunding />
                </div>

                <Footer />
            </div>




        </>

    );
}

export default DashboardAdmin