import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import emailjs from "emailjs-com";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ee5rduq', 'template_ifn2lde', e.target, 'user_auDCWQqpwHwe2nHdx1rCG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
    <div className="background contact p-3">
    <h1 className="text-center text-success font-weight-bolder pt-5">Get In Touch</h1>
       <div className="container text-light">
        <div className="row mt-3 text-center d-flex justify-content-center">
            <div className="col-md-4 p-3 pt-5 mt-5">
                <h4>Let's talk about everything!</h4>
                <p>Don't like forms? Send me an <i className="text-success">email</i> 👋</p> 

                <p><FontAwesomeIcon icon={faEnvelope} className=" ml-2 mr-2 text-success fa-lg" />sunjid.info@gmail.com</p>

                <div className="p-3">
                You can also reach me via 
                <FontAwesomeIcon icon={faMobileAlt} className=" ml-2 mr-1 text-success fa-lg" />  at
                <p>01521417063</p>
                </div>
            </div>

            <div className="col-md-6 p-5 m-3 pb-5 pt-5">

            <form className="contact-form" onSubmit={sendEmail}>
                <div className="form-row">

                    <div className="col mb-3">
                    <input type="text" name="name" placeholder="Your Name" className="form-control"/>
                    </div>

                    <div className="col ">
                    <input type="text" name="subject" placeholder="Subject" className="form-control"/>
                    </div> 

                    <br/>
                    
                    <input type="email" name="email" placeholder="Your Email Address" className="form-control mb-3"/>
                    <br/>

                    <textarea name="message" id="" cols="15" rows="5" className="form-control"  placeholder="Feel free to drop a message. I'd love to hear from you..." required ></textarea>

                    <div className="col-auto pt-3">
                    <input type="submit" value="Send" className="sendMessage"/>
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