import React from 'react';
import './Works.css';
import p1 from '../../images/p1.PNG';
import p2 from '../../images/p2.PNG';
import p3 from '../../images/p3.PNG';
import p4 from '../../images/p4.PNG';
import p5 from '../../images/p5.PNG';
import p6 from '../../images/p6.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Works = () => {
    return (
        <section>
        <div className="container">
            <h1 className="text-center text-light m-5">Works</h1>
            <div className="row">
                    
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p1} alt=""/>
                        <h5 className="text-center pt-4">Bengal It Plus</h5>

                        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero, in id, modi illum dicta veritatis porro labore eaque pariatur exercitationem, quia illo explicabo at.</p>

                        <div className="text-center text-success">
                        <FontAwesomeIcon icon={faGithub} className="mr-5"/> 
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                        </div>
                    
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p2} alt=""/>
                        <h5 className="text-center p-3">Bengal Shop</h5>

                        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero, in id, modi illum dicta veritatis porro labore eaque pariatur exercitationem, quia illo explicabo at.</p>
                        
                        <div className="text-center text-success">
                        <FontAwesomeIcon icon={faGithub} className="mr-5"/> 
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p3} alt=""/>
                        <h5 className="text-center p-3">Hotel Adriano</h5>

                        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero, in id, modi illum dicta veritatis porro labore eaque pariatur exercitationem, quia illo explicabo at.</p>

                        <div className="text-center text-success">
                        <FontAwesomeIcon icon={faGithub} className="mr-5"/> 
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                        </div>
                    </div>
                </div>
            </div>

             <div className="row">
                    
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p4} alt=""/>
                        <h5 className="text-center p-3">Elite Soccer Craze</h5>

                        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero, in id, modi illum dicta veritatis porro labore eaque pariatur exercitationem, quia illo explicabo at.</p>

                        <div className="text-center text-success">
                        <FontAwesomeIcon icon={faGithub} className="mr-5"/> 
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                        </div>
                    
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p5} alt=""/>
                        <h5 className="text-center p-3">Bengal Transport</h5>

                        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero, in id, modi illum dicta veritatis porro labore eaque pariatur exercitationem, quia illo explicabo at.</p>

                        <div className="text-center text-success">
                        <FontAwesomeIcon icon={faGithub} className="mr-5"/> 
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p6} alt=""/>
                        <h5 className="text-center p-3">Portfolio website</h5>

                        <p className="p-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vero, in id, modi illum dicta veritatis porro labore eaque pariatur exercitationem, quia illo explicabo at.</p>

                        <div className="text-center text-success">
                        <FontAwesomeIcon icon={faGithub} className="mr-5"/> 
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Works;