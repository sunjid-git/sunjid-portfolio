import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import bd from '../../../images/bdFlag.gif';

const Footer = () => {
    return (
        <div className="text-center p-4 background">
            <p className="text-light">
            Designed & Built by <i className="text-success">Sunjid Hasan</i>
            <br/>
           
            </p>

            <p className="text-light">
               
                <img className="bd" src={bd} alt=""/>
                <FontAwesomeIcon icon={faStar} /> 
                <strong className="footerSpace">Star &</strong> 
                <FontAwesomeIcon icon={faCodeBranch} className="footerSpace"/>
                <strong className="footerSpace">Forks - </strong>{(new Date()).getFullYear()} 
            </p>
        </div>
    );
};

export default Footer;