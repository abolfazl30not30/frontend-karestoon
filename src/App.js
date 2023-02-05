import React from 'react';
import MainPage from "./Components/Home/MainPage/MainPage";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DashboardUser from "./Components/Dashboard User/Template/master"
import DashboardAdmin from "./Components/Dashboard Admin/Template/master"
import Login from "./Components/Signup/Login";
import Signup from "./Components/Signup/Signup";
import CrowdFunding from "./Components/Dashboard Admin/Pages/Crowdfunding";
import CreateCrowdFunding from "./Components/Dashboard Admin/Pages/CreateCrowdFunding"
import MainAdminPage from "./Components/Dashboard Admin/Pages/main"
import MainUserPage from "./Components/Dashboard User/Pages/main"
import ProjectUser from "./Components/Dashboard User/Pages/Payment"
import UserAccount from "./Components/Dashboard User/Pages/account"
import AdminTicket from "./Components/Dashboard Admin/Pages/adminTicket"
import AdminChat from "./Components/Dashboard Admin/Pages/AdminChat"

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={(<MainPage/>)}/>
                <Route path="/admin" element={(<DashboardAdmin/>)}>
                    <Route path="" element={<MainAdminPage />} />
                    <Route path="crowd-funding" element={<CrowdFunding />} />
                    <Route path="create-crowd-funding" element={<CreateCrowdFunding />} />
                    <Route path="ticket" element={<AdminTicket />} />
                    <Route path="ticket/chat" element={<AdminChat />} />
                </Route>


                <Route path="/dashboard" element={(<DashboardUser/>)}>
                    <Route path="" element={<MainUserPage />} />
                    <Route path="account" element={<UserAccount />} />
                    <Route path="projects" element={<ProjectUser />} />
                </Route>


                <Route exact path="/login" element={(<Signup/>)}/>
                {/*<Route exact path="/dashboard/*" element={(<DashboardUser/>)}/>*/}
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
