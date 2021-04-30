
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
    <nav className=" navbar navbar-expand-lg sticky-top background">
        <div className="container-fluid">
            <h1 className="navbar-brand text-success font-weight-bold">Sunjid Hasan</h1>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
                <Link className="nav-link text-light" to="/home">Home</Link>
                <Link className="nav-link text-light" to="/about">About</Link>
                <Link className="nav-link text-light" to="/works">Works</Link>
                <Link className="nav-link text-light" to="/blog">Blog</Link>
                <Link className="nav-link text-light" to="/contact">Contact</Link>
                
                <a className="nav-link text-light resumeBtn" href="https://drive.google.com/file/d/1qiRPUCdlLNBYOn4VJIU563RO64uawqY-/view?usp=sharing"  target="blank">Resume</a>
                 
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Header;