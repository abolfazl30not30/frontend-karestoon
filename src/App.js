import React from 'react';
import MainPage from "./Components/Home/MainPage/MainPage";
import Signup from "./Components/Signup/Signup";
import '../src/style/index.css'
import Login from "./Components/Signup/Login";

function App() {
  return (
    <>
        {/*<MainPage/>*/}
        <Signup />
        <Login />
    </>
  );
}

export default App;
