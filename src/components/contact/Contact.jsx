import React from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

// using emailjs 
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ikwqoxk', 'template_a5cjgm9', form.current, 'rgzfmomq8af2sA6DL')

        e.target.reset();
    };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>contact Me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>sjeewan53@gmail.com</h5>
            <a href="mailto:sjeewan53@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Jeewan Sharma</h5>
            <a href="http://m.me/jeewansharma123/" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+977-9862221435</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779862221435" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder="Your Full Name" required />
            <input type='email' name='email' placeholder="Your Email" required />
            <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
            <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
