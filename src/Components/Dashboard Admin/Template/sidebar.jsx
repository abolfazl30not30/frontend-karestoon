import React from "react";
import Logo from "../../../assets/img/LOGO1-1.jpeg"
import {CgProfile} from 'react-icons/cg'
import {
    UilLightbulbAlt,
    UilUser,
    UilMoneyBill,
    UilEnvelopeQuestion,
    UilFileBlank,
    UilTimes,
    UilCreditCardSearch,
    UilSignout
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
                    <div className="d-flex flex-row align-items-center sidebar-list-item">
                        <UilMoneyBill/>
                        <div className="sidebar-list-item-title">
                            کمپین ها
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center sidebar-list-item">
                        <UilMoneyBill/>
                        <div className="sidebar-list-item-title">
                            ساخت کمپین
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center sidebar-list-item">
                        <UilUser/>
                        <div className="sidebar-list-item-title">
                            اطلاعات حساب کاربری
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center sidebar-list-item">
                        <UilEnvelopeQuestion/>
                        <div className="sidebar-list-item-title">
                            تیکت
                        </div>
                    </div>
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