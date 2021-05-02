import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
    <div className="background contact">
    <h1 className="text-center text-success font-weight-bolder p-5">Get In Touch</h1>
       <div className="container text-light">
        <div className="row mt-3 text-center d-flex justify-content-center">
            <div className="col-md-4 p-3 pt-5">
                <h4>Let's talk about everything!</h4>
                <p>Don't like forms? Send me an<a href="mailto:sunjid.info@gmail.com" target="blank" rel="noopener noreferrer"> email</a>. 👋</p>
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