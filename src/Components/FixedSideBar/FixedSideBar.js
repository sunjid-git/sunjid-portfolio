import React from 'react';
import './FixedSideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faHome, faLayerGroup, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faComments, faEdit } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const FixedSideBar = () => {
    return (  
    <div className="social">
        <ul>
            <li>
            <Link className="text-light" to={`/home`}>
                <FontAwesomeIcon icon={faHome} className="sideIcon" />
            </Link>
            </li>

            <li>
            <Link className="text-light" to={`/about`}>
                <FontAwesomeIcon icon={faUserTie} className="sideIcon" />
            </Link>
            </li>

            <li>
            <Link className="text-light" to={`/works`}>
                <FontAwesomeIcon icon={faLayerGroup} className="sideIcon" /> 
            </Link>
            </li>

            <li>
            <Link className="text-light" to={`/blog`}>
                <FontAwesomeIcon icon={faEdit} className="sideIcon"/> 
            </Link>
            </li>

            <li>
            <Link className="text-light" to={`/contact`}>
                <FontAwesomeIcon icon={faComments} className="sideIcon"/>
            </Link>
            </li>
        </ul>
    </div>
    );
};

export default FixedSideBar;