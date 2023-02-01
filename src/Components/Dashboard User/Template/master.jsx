import React from "react";
import Navbar from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import Main from "../Pages/main";
import Campaign from "../Pages/Campaign"
import Crowdfunding from "../Pages/Crowdfunding"
import Payment from "../Pages/Payment";
import "../../../style/dashboard.css"



function DashboardUser() {
    return (
        <>
            {/*<div>master</div>*/}
            <div className="d-flex flex-column" dir='rtl'>
                <Sidebar />
                <Navbar />
                <div className="main">
                    <Payment />
                </div>

                <Footer />
            </div>




        </>

    );
}

export default DashboardUser