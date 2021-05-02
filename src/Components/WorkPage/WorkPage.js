import React from 'react';
import FixedSideBar from '../FixedSideBar/FixedSideBar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Works from '../Works/Works';

const WorkPage = () => {
    return (
        <>
            <Header></Header>
            <FixedSideBar></FixedSideBar>
            <Works></Works>
            <Footer></Footer>
        </>
    );
};

export default WorkPage;