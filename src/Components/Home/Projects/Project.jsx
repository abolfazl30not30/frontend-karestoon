import React from 'react';
import Header2 from "../MainPage/Header2";
import Title from "../CommenPage/Title";
import Footer from "../MainPage/Footer";
import ListOfProject from "./ListOfProject";

function Project() {

    return (
        <>
            <Header2/>
            <Title name="پـروژه ها"/>
            <ListOfProject/>
            <Footer/>
        </>
    );
}

export default Project