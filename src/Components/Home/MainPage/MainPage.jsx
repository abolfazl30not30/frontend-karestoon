import React from 'react';
import Header from "./Header";
import HeroArea from "./HeroArea";
import About from "./About";
import Project from "./Project";
import Campaigns from "./Campaigns"
import Footer from "./Footer";
import Partners from "./Partners";
import Counter from "./Counter";

function MainPage() {

    return (
        <>
            <Header/>
            <HeroArea/>
            <Project/>
            <Campaigns/>
            <Counter/>
            <Partners/>
            <Footer/>
        </>
    );
}

export default MainPage