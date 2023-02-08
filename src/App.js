import React from 'react';
import MainPage from "./Components/Home/MainPage/MainPage";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DashboardUser from "./Components/Dashboard User/Template/master"
import DashboardAdmin from "./Components/Dashboard Admin/Template/master"
import Login from "./Components/Signup/Login";
import Signup from "./Components/Signup/Signup";
import ProjectDetails from "./Components/Home/projectDetails/projectDetails";
import AboutUs from "./Components/Home/Contact/Contact";
import Contact from "./Components/Home/Contact/Contact";
import Project from "./Components/Home/Projects/Project";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={(<MainPage/>)}/>
                <Route exact path="/projects" element={(<Project/>)}/>
                <Route exact path="/project-details" element={(<ProjectDetails/>)}/>
                <Route exact path="/contact-us" element={(<Contact/>)}/>
                <Route exact path="/admin/*" element={(<DashboardAdmin/>)}/>
                <Route exact path="/login" element={(<Signup/>)}/>
                <Route exact path="/dashboard/*" element={(<DashboardUser/>)}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
