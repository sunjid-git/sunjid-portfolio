import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';
import error from '../../images/error.png';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const NoMatch = () => {
    return (
        <>
        <Header></Header>
            <div className="container text-center">
                <img className="errorImg" src={error} alt=""/>
            <div className="text-center">
                <Link className="explore" to={`/home`}>Home Page</Link>
            </div>
            </div>
        <Footer></Footer>
        </>
    );
};

export default NoMatch;