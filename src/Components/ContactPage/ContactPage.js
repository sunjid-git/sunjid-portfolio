import React from 'react';
import Contact from '../Contact/Contact';
import FixedSideBar from '../FixedSideBar/FixedSideBar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ContactPage = () => {
    return (
        <>
        <Header></Header> 
        <FixedSideBar></FixedSideBar> 
        <Contact></Contact>
        <Footer></Footer>
        </>
    );
};

export default ContactPage;