
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
    <nav className=" navbar navbar-expand-lg sticky-top background">
        <div className="container-fluid ml-4 mr-4">
            <h1 className="navbar-brand text-success font-weight-bold">Sunjid Hasan</h1>

            <div className="collapse navbar-collapse justify-content-end">

            <div className="navbar-nav">

                <p className="nav-link active">
                <Link className="text-light" to={`/home`}>Home</Link>
                </p>

                <p className="nav-link active">
                <Link className="text-light" to={`/about`}>About</Link>
                </p>

                <p className="nav-link active">
                <Link className="text-light" to={`/works`}>Works</Link>
                </p>

                <p className="nav-link active">
                <Link className="text-light" to={`/blog`}>Blog</Link>
                </p>

                <p className="nav-link active">
                <Link className="text-light" to={`/contact`}>Contact</Link>
                </p>
                
                <p>
                <a className="nav-link resumeBtn" href="https://drive.google.com/file/d/1qiRPUCdlLNBYOn4VJIU563RO64uawqY-/view?usp=sharing"  target="blank">Resume</a>
                </p>
                 
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Header;