import React from 'react';
import emailjs from "emailjs-com";

const ContactMe = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_baebb4h', e.target, 'user_auDCWQqpwHwe2nHdx1rCG').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    }

    return (
        <div>
        <div className="container">
        <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </div>
    </div>
    );
};

export default ContactMe;