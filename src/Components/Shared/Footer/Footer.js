import React from 'react';
import './Footer.css';
import bd from '../../../images/bdFlag.gif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className="text-center background p-4 footer">
            <p className="text-light">From<img className="bd ml-2 mr-2" src={bd} alt=""/> With 
            <FontAwesomeIcon icon={faHeart} className=" text-danger fa-lg ml-2 mr-1" /> By
             <i className="text-success ml-1"> Sunjid Hasan</i> -
            <strong className="footerSpace"></strong>{(new Date()).getFullYear()}
            </p>

        </div>
    );
};

export default Footer;