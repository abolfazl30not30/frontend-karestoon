import React,{ useState } from "react";
import { BsList } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { UilUser,UilLightbulbAlt,UilMoneyBill } from '@iconscout/react-unicons'


function Navbar() {
    const toggleSidebar = () => {
        let sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("close");
    }
    return (
        <div className="navbar-dashboard">

            <div className='d-flex flex-row align-items-center'>
                <button className='btn ms-3' onClick={toggleSidebar}>
                    <BsList />
                </button>
                {/*<div className="d-flex flex-row navbar-items">
                    <div className="navbar-item">
                        <UilLightbulbAlt />
                        <span className='navbar-item-title'>کمپین</span>
                    </div>
                    <div className="navbar-item">
                        <UilMoneyBill />
                        <span className='navbar-item-title'>تامین مالی</span>
                    </div>
                    <div className="navbar-item">
                        <BsChevronLeft />
                        <span className='navbar-item-title'>صفحه</span>
                    </div>
                    <div className="navbar-item">
                        <BsChevronLeft />
                        <span className='navbar-item-title'>صفحه</span>
                    </div>
                </div>*/}
            </div>
            <Dropdown>
                <Dropdown.Toggle  id="dropdown-basic" >
                    <UilUser />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">حساب کاربری</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">صفحه اصلی</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">پنل کاربری</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">خروج از حساب</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Navbar;