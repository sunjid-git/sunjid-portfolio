import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (
        <section>
        <div className="container text-center aboutSection">
            <div className="text-box">
                <span>S</span>
                <span>U</span>
                <span>N</span>
                <span>J</span>
                <span>I</span>
                <span>D</span>     
                  
                <h3 className="text-success m-3 "><strong>Engineer | Web Developer</strong></h3>

                <div>
                    <a href="https://github.com/sunjid-git" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="socialIcon" /> 
                    </a>
                    
                    <a href="https://www.linkedin.com/in/sunjid-in/"  target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="socialIcon"/>
                    </a>
                     
                     <a href="https://www.facebook.com/sunjid.info/"  target="_blank" rel="noreferrer">
                     <FontAwesomeIcon icon={faFacebook} className="socialIcon"/>
                     </a>
                     
                </div>
                   
                <div className=" d-flex justify-content-center">
                
                    <Link  to={`/contact`}>
                       <h1 className="oneBtn">Get in touch </h1>
                    </Link>
                  
                   
                   <a className="twoBtn" href="https://drive.google.com/u/0/uc?id=1qiRPUCdlLNBYOn4VJIU563RO64uawqY-&export=download"  rel="noopener noreferrer" target="_blank" download>Download Resume </a>

                </div>
            </div>
        </div>
    </section>
    );
};

export default HomePage;