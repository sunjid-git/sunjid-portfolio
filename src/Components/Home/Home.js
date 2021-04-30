import React from 'react';

import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import HomePage from '../HomePage/HomePage';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <section className="background">
            <Header></Header>
            <HomePage></HomePage>
            <Works></Works>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default Home;