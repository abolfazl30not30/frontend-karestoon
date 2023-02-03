import React from 'react';
import MainPage from "./Components/Home/MainPage/MainPage";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DashboardUser from "./Components/Dashboard User/Template/master"
import DashboardAdmin from "./Components/Dashboard Admin/Template/master"
import Login from "./Components/Signup/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={(<MainPage/>)}/>
                <Route exact path="/admin/*" element={(<DashboardAdmin/>)}/>
                <Route exact path="/login" element={(<Signup/>)}/>
                <Route exact path="/dashboard/*" element={(<DashboardUser/>)}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
