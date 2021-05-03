import React from 'react';
import './Works.css';
import p1 from '../../images/p1.PNG';
import p2 from '../../images/p2.PNG';
import p3 from '../../images/p3.PNG';
import p4 from '../../images/p4.PNG';
import p5 from '../../images/p5.PNG';
import p6 from '../../images/p6.PNG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3Alt, faGithub, faHtml5, faNode, faReact } from '@fortawesome/free-brands-svg-icons';

const Works = () => {
    return (
        <section className="background">
        <div className="container">
            <h1 className="text-center text-success font-weight-bolder mb-5 pt-5">Works</h1>
            <div className="row">
                    
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p1} alt=""/>
                        <h5 className="text-center text-success pt-4">Bengal It Plus</h5>

                        <p className="p-2 text-center projectDesc">A semi functional electronic gadget selling and repairing store with multiple service option and functionality like dynamic data loading with relevant information and
                        dynamic review section.</p>

                    <div className="text-center text-light pb-4">
                    <FontAwesomeIcon icon={faBootstrap} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faReact} className=" ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faNode} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faDatabase} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faGithub} className="ml-1 mr-1 fa-lg"/>
                    </div>

                        <div className="text-center">
                        <a href="https://github.com/sunjid-git/bengal-it-plus" rel="noopener noreferrer" target="blank" ><FontAwesomeIcon icon={faGithub} className="text-success mr-5 fa-lg"/></a>

                        <a href="https://bengal-it-plus.web.app/" rel="noopener noreferrer" target="blank" >
                        <FontAwesomeIcon icon={faGlobe} className=" text-success ml-5 fa-lg"/></a>
                        </div>

                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p2} alt=""/>
                        <h5 className="text-center text-success p-3">Bengal Shop</h5>

                        <p className="p-2 text-center projectDesc">Online grocery shop with some functionality, also has image with some relevant information uploading facility. Not completed yet, working on its development.</p>

                    <div className="text-center text-light pb-4">
                    <FontAwesomeIcon icon={faBootstrap} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faReact} className=" ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faNode} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faDatabase} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faGithub} className="ml-1 mr-1 fa-lg"/>
                    </div>
                        
                        <div className="text-center">
                        <a href="https://github.com/sunjid-git/bengal-shop-client" rel="noopener noreferrer" target="blank" ><FontAwesomeIcon icon={faGithub} className="text-success mr-5 fa-lg"/></a>

                        <a href="https://bengalshop-buy.web.app/home" rel="noopener noreferrer" target="blank" >
                        <FontAwesomeIcon icon={faGlobe} className=" text-success ml-5 fa-lg"/></a>
                        </div>

                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p3} alt=""/>
                        <h5 className="text-center text-success p-3">Hotel Adriano</h5>

                        <p className="p-2 text-center projectDesc">Static restaurant website design with relevent product items and with some detailed information. It was designed to get a clear concept of basic web development.</p>

                    <div className="text-center text-light pb-4">
                    <FontAwesomeIcon icon={faHtml5} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faCss3Alt} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faBootstrap} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faGithub} className="ml-1 mr-1 fa-lg"/>
                    </div>

                         <div className="text-center">
                        <a href="https://github.com/sunjid-git/Hotel-Adriano-Porco-Rosso/" rel="noopener noreferrer" target="blank" ><FontAwesomeIcon icon={faGithub} className="text-success mr-5 fa-lg"/></a>

                        <a href="https://sunjid-git.github.io/Hotel-Adriano-Porco-Rosso/" rel="noopener noreferrer" target="blank" >
                        <FontAwesomeIcon icon={faGlobe} className=" text-success ml-5 fa-lg"/></a>
                        </div>

                    </div>
                </div>
            </div>

             <div className="row">
                    
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p4} alt=""/>
                        <h5 className="text-center text-success p-3">Elite Soccer Craze</h5>

                        <p className="p-2 text-center projectDesc">It is an dynamic website about showing the teams and the teams details of football history English Premier League. Here the data loading is based on the API.</p>

                    <div className="text-center text-light pb-4">
                    <FontAwesomeIcon icon={faReact} className=" ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faBootstrap} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faGithub} className="ml-1 mr-1 fa-lg"/>
                    </div>

                        <div className="text-center">
                        <a href="https://github.com/sunjid-git/elite-soccer-craze" rel="noopener noreferrer" target="blank" ><FontAwesomeIcon icon={faGithub} className="text-success mr-5 fa-lg"/></a>

                        <a href="https://youthful-hawking-c6635a.netlify.app/" rel="noopener noreferrer" target="blank" >
                        <FontAwesomeIcon icon={faGlobe} className=" text-success ml-5 fa-lg"/></a>
                        </div>
                    
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={p5} alt=""/>
                        <h5 className="text-center text-success p-3">Bengal Transport</h5>

                        <p className="p-2 text-center projectDesc">This website is about giving multiple transport service. Basically the design is based on dynamic data loading through the constructed API. User needs to be authenticated to get the service.</p>

                        <div className="text-center text-light pb-4">
                    <FontAwesomeIcon icon={faReact} className=" ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faBootstrap} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faGithub} className="ml-1 mr-1 fa-lg"/>
                    </div>

                        <div className="text-center">
                        <a href="https://github.com/sunjid-git/bengal-transport" rel="noopener noreferrer" target="blank" ><FontAwesomeIcon icon={faGithub} className="text-success mr-5 fa-lg"/></a>

                        <a href="https://keen-lewin-28a3ed.netlify.app/" rel="noopener noreferrer" target="blank" >
                        <FontAwesomeIcon icon={faGlobe} className=" text-success ml-5 fa-lg"/></a>
                        </div>

                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                <div className="projectCard mb-5">
                    <img className="serviceImg" src={p6} alt=""/>
                    <h5 className="text-center text-success p-3">Portfolio website</h5>

                    <p className="p-2 text-center projectDesc">This is my personal portfolio website with minimalistic design implementation. Kept it simple and smooth. Includes several sections on focusing my projects, skills and educational background. </p>

                    <div className="text-center text-light pb-4">
                    <FontAwesomeIcon icon={faReact} className=" ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faBootstrap} className="ml-1 mr-1 fa-lg"/>
                    <FontAwesomeIcon icon={faGithub} className="ml-1 mr-1 fa-lg"/>
                    </div>

                    <div className="text-center">
                    <a href="https://sunjid-hasan.web.app/" rel="noopener noreferrer" target="blank" ><FontAwesomeIcon icon={faGithub} className="text-success mr-5 fa-lg"/></a>

                    <a href="https://github.com/sunjid-git/sunjid-portfolio-website" rel="noopener noreferrer" target="blank" >
                    <FontAwesomeIcon icon={faGlobe} className=" text-success ml-5 fa-lg"/></a>
                    </div>

                </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Works;