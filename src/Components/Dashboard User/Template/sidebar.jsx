import React from "react";
import {Link} from "react-router-dom"
import Logo from "../../../assets/img/LOGO1-1.jpeg"
import {
    UilUser,
    UilEnvelopeQuestion,
    UilTimes,
    UilThumbsUp,
    UilSignout, UilWindow, UilEnvelope
} from '@iconscout/react-unicons'


function Sidebar() {
    const closeSidebar = () => {
        let sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("close");
    }
    return (
        <>
            <div className='sidebar-dashboard close' id='sidebar'>
                <div id='close_sidebar_mobile' onClick={closeSidebar}>
                    <UilTimes/>
                    بستن
                </div>
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="sidebar-list mt-4">
                    <Link to="/dashboard" className='w-100'>
                        <div className="d-flex flex-row align-items-center sidebar-list-item">
                            <UilWindow />
                            <div className="sidebar-list-item-title">
                                داشبورد
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/projects" className='w-100'>
                        <div className="d-flex flex-row align-items-center sidebar-list-item">
                            <UilThumbsUp/>
                            <div className="sidebar-list-item-title">
                                حمایت های من
                            </div>
                        </div>
                    </Link>
                    <Link to="/dashboard/account" className='w-100'>
                        <div className="d-flex flex-row align-items-center sidebar-list-item">
                            <UilUser/>
                            <div className="sidebar-list-item-title">
                                اطلاعات حساب کاربری
                            </div>
                        </div>
                    </Link>


                    <Link to="/dashboard/ticket" className='w-100'>
                        <div className="d-flex flex-row align-items-center sidebar-list-item">
                            <UilEnvelope/>
                            <div className="sidebar-list-item-title">
                                تیکت
                            </div>
                        </div>
                    </Link>
                    <div className="d-flex flex-row align-items-center sidebar-list-item">
                        <UilSignout />
                        <div className="sidebar-list-item-title">
                            خروج
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;