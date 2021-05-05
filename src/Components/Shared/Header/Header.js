

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedhat } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top  background">

        <div class="container-fluid ml-4 mr-4">
        <h1 className="navbar-brand font-weight-bold">
            <Link className="text-success text-decoration-none" to={`/`}>
           Sunjid Hasan
            </Link>
           <FontAwesomeIcon icon={faRedhat} className="sideIcon ml-2 text-light fa-lg" /> 
            </h1>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <p class="navbar-toggler-icon text-light bg-light rounded"></p>
        </button>
        <div class="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">

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
                <a className="nav-link active resumeBtn text-light text-center" href="https://drive.google.com/file/d/1qiRPUCdlLNBYOn4VJIU563RO64uawqY-/view?usp=sharing" target="blank">Resume</a>
                </p>
            </div>
        </div>
        </div>

        </nav>
    );
};

export default Header;