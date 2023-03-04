import React from 'react';
import MainPage from "./Components/Home/MainPage/MainPage";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DashboardUser from "./Components/Dashboard User/Template/master"
import DashboardAdmin from "./Components/Dashboard Admin/Template/master"
import SignIn from "./Components/Signup/SignIn";
import SignUp from "./Components/Signup/SignUp";
import CrowdFunding from "./Components/Dashboard Admin/Pages/Crowdfunding";
import CreateCrowdFunding from "./Components/Dashboard Admin/Pages/CreateCrowdFunding"
import ProjectUser from "./Components/Dashboard User/Pages/Project"
import UserAccount from "./Components/Dashboard User/Pages/Account"
import AdminTicket from "./Components/Dashboard Admin/Pages/AdminTicket"
import AdminChat from "./Components/Dashboard Admin/Pages/AdminChat"
import UserTicket from "./Components/Dashboard User/Pages/UserTicket"
import UserChat from "./Components/Dashboard User/Pages/UserChat"
import OTP from "./Components/Signup/OTP"
import EnterPassword from "./Components/Signup/EnterPassword"
import ResetPassword from "./Components/Signup/ResetPassword"
import EditCrowdFunding from "./Components/Dashboard Admin/Pages/EditCrowdFunding"
import ProjectDetails from "./Components/Home/projectDetails/projectDetails";
import Contact from "./Components/Home/Contact/Contact";
import Project from "./Components/Home/Projects/Project";

function App() {

  return (
    <>

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={(<MainPage/>)}/>
                    <Route path="/manager" element={(<DashboardManager/>)}>
                        <Route path="" element={<MainManagerPage />} />
                        <Route path="crowd-funding" element={<CrowdFunding />} />
                        <Route path="create-crowd-funding" element={<CreateCrowdFunding />} />
                        <Route path="edit-crowd-funding" element={<EditCrowdFunding />} />
                        <Route path="ticket" element={<ManagerTicket />} />
                        <Route path="ticket/chat" element={<ManagerChat />} />
                        <Route path="admins" element={<Admins />} />
                    </Route>
                    <Route path="/admin" element={(<DashboardAdmin/>)}>
                        {/*<Route path="" element={<MainAdminPage />} />*/}
                        <Route path="crowd-funding" element={<CrowdFunding />} />
                        <Route path="create-crowd-funding" element={<CreateCrowdFunding />} />
                        <Route path="edit-crowd-funding/:id" element={<EditCrowdFunding />} />
                        <Route path="ticket" element={<AdminTicket />} />
                        <Route path="ticket/:id" element={<AdminChat />} />
                    </Route>
                    <Route path="/dashboard" element={(<DashboardUser/>)}>
                        {/*<Route path="" element={<MainUserPage />} />*/}
                        <Route path="account" element={<UserAccount />} />
                        <Route path="projects" element={<ProjectUser />} />
                        <Route path="ticket" element={<UserTicket />} />
                        <Route path="ticket/:id" element={<UserChat />} />
                    </Route>
                    <Route exact path="/sign-in" element={(<SignIn/>)}/>
                    <Route exact path="/sign-up" element={(<SignUp/>)}/>
                    <Route exact path="/OTP" element={(<OTP/>)}/>
                    <Route exact path="/enter-password" element={(<EnterPassword/>)}/>
                    <Route exact path="/reset-password" element={(<ResetPassword/>)}/>
                    <Route exact path="/projects" element={(<Project/>)}/>
                    <Route exact path="/project-details" element={(<ProjectDetails/>)}/>
                    <Route exact path="/contact-us" element={(<Contact/>)}/>
                </Routes>
            </BrowserRouter>


    </>
  );
}

export default App;
