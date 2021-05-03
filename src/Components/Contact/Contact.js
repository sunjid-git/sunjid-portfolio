import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
    <div className="background contact p-5">
    <h1 className="text-center text-success font-weight-bolder pt-5">Get In Touch</h1>
       <div className="container text-light">
        <div className="row mt-3 text-center d-flex justify-content-center">
            <div className="col-md-4 p-3 pt-5 mt-5">
                <h4>Let's talk about everything!</h4>
                <p>Don't like forms? Send me an <i className="text-success">email</i> 👋</p>

                <div className="p-5">
                You can also reach me via 
                <FontAwesomeIcon icon={faMobileAlt} className=" ml-2 mr-1 text-success fa-lg" />  at 
                <p>+880 1521-417-063</p>
                </div>

            </div>
            <div className="col-md-6 p-5 pb-5">
            <form>
                <div className="form-row">
                    <div className="col mb-3">
                    <input type="text" className="form-control" required placeholder="Your name "/>
                    </div>
                    <div className="col ">
                    <input type="email" className="form-control" required placeholder="Email Address"/>
                    </div> 
                    <br/>
                    <input type="text" className="form-control mb-3" required placeholder="Subject"/>
                    <br/>
                    <textarea name="" id="" cols="25" rows="6" className="form-control" required placeholder="Message"></textarea>

                    <div className="col-auto pt-3">
                    <button type="submit" className="sendMessage">Send Message</button>
                    </div>

                </div>
            </form>
            </div>
        </div>

       </div>
    </div>
    );
};

export default Contact;