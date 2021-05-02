import React from 'react';
import gifOne from '../../images/gifOne.gif';
import gifTwo from '../../images/gifTwo.gif';
import gifThree from '../../images/gifThree.gif';

const Blog = () => {
    return (
        <div className="background">
            <div className="container">
            <h1 className="text-center text-success font-weight-bolder p-5">
                Blog
            </h1>
            <div className="row">
                    
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={gifOne} alt=""/>
                        <h5 className="text-center text-success p-3">Coming Soon</h5>
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={gifTwo} alt=""/>
                        <h5 className="text-center text-success p-3">Coming Soon</h5>
                    </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center">
                    <div className="projectCard mb-5">
                        <img className="serviceImg" src={gifThree} alt=""/>
                        <h5 className="text-center text-success p-3">Coming Soon</h5>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;