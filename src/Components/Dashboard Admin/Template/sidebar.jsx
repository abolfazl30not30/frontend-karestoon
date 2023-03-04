import React from "react";
import Logo from "../../../assets/img/LOGO1-1.jpeg"
import {Link} from "react-router-dom"
import {
    UilTimes,
    UilWindow ,
    UilSignout,
    UilFolderPlus,
    UilFolder,
    UilEnvelope
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
                    {/*<Link to="/admin" className='w-100'>*/}
                    {/*    <div className="d-flex flex-row align-items-center sidebar-list-item">*/}
                    {/*        <UilWindow />*/}
                    {/*        <div className="sidebar-list-item-title">*/}
                    {/*            داشبورد*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                    <Link to="/admin/crowd-funding" className='w-100'>
                        <div className="d-flex flex-row align-items-center sidebar-list-item">
                            <UilFolder />
                            <div className="sidebar-list-item-title">
                                پروژه ها
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/create-crowd-funding" className='w-100'>
                        <div className="d-flex flex-row align-items-center sidebar-list-item">
                            <UilFolderPlus />
                            <div className="sidebar-list-item-title">
                                ساخت پروژه
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/ticket" className='w-100'>
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