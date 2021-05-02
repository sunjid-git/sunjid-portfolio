import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import FixedSideBar from '../FixedSideBar/FixedSideBar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css';


const About = () => {
    return (
    <>
        <Header></Header>
        <FixedSideBar></FixedSideBar>
        <AboutMe></AboutMe>
        <Footer></Footer>
    </>
    );
};

export default About;