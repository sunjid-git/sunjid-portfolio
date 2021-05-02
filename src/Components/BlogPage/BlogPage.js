import React from 'react';
import Blog from '../Blog/Blog';
import FixedSideBar from '../FixedSideBar/FixedSideBar';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const BlogPage = () => {
    return (
        <>
            <Header></Header>
            <FixedSideBar></FixedSideBar>
            <Blog></Blog>
            <Footer></Footer>
        </>
    );
};

export default BlogPage;