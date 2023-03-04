import React,{ useState } from "react";
import { BsList } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { UilUser,UilLightbulbAlt,UilMoneyBill } from '@iconscout/react-unicons'
import {Link} from "react-router-dom";


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
            </div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                    <UilUser/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to='/'>
                            صفحه اصلی
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to='/manager'>
                            پنل کاربری
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to='/'>
                            خروج از حساب
                        </Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Navbar;