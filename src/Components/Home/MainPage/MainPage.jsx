import React from 'react';
import Header from "./Header";
import HeroArea from "./HeroArea";
import About from "./About";
import Project from "./Project";
import Campaigns from "./Campaigns"
import Footer from "./Footer";
function MainPage() {

    return (
        <>
            <Header/>
            <HeroArea/>
            <About/>
            <Project/>
            <Campaigns/>
            <Footer/>
        </>
    );
}

export default MainPage