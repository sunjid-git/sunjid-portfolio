import React from 'react';
import './AboutMe.css';
import sunjid from '../../images/sunjid.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="background aboutMe">
            <h1 className="text-center text-success font-weight-bolder  p-3">About</h1>
           <div className="text-center ">
            <img className="sunjidImg m-3" src={sunjid} alt=""/>

            <div>
                <a href="https://github.com/sunjid-git" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="aboutIcon fa-2x" /> 
                </a>
                    
                <a href="https://www.linkedin.com/in/sunjid-in/"  target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="aboutIcon fa-2x"/>
                </a>
                     
                <a href="https://www.facebook.com/sunjid.info/"  target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="aboutIcon fa-2x"/>
                </a>   
            </div>

            <p className="text-light textAbout">A self-taught software developer with a Bachelor's in  <br/> Computer Science and Engineering. Besides programming all day,  <br/> he has a passion for writing about himself in third person.</p>
           </div>

            <div className=" d-flex justify-content-center">   
                <Link  to={`/contact`}>
                    <h1 className="aboutOneBtn">Get in touch </h1>
                </Link>
                  
                   
                <a className="aboutTwoBtn" href="https://drive.google.com/u/0/uc?id=1qiRPUCdlLNBYOn4VJIU563RO64uawqY-&export=download"  rel="noopener noreferrer" target="_blank" download>Download Resume </a>

            </div>

        </div>
    );
};

export default AboutMe;