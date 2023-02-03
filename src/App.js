import React from 'react';
import MainPage from "./Components/Home/MainPage/MainPage";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DashboardUser from "./Components/Dashboard User/Template/master"
import DashboardAdmin from "./Components/Dashboard Admin/Template/master"

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={(<MainPage/>)}/>
                <Route exact path="/admin/*" element={(<DashboardAdmin/>)}/>
                <Route exact path="/dashboard/*" element={(<DashboardUser/>)}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
