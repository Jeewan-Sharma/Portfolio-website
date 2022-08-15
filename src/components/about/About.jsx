import React from "react";
import "./about.css";
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward/>
                        <h5>Experience</h5>
                        <small>2+ years experience</small>
                    </article>
                    <article className="about__card">
                        <FiUser/>
                        <h5>Clients</h5>
                        <small>World Wide</small>
                    </article>
                    <article className="about__card">
                        <VscFolderLibrary/>
                        <h5>projects</h5>
                        <small>15+ compleated project</small>
                    </article>
                </div>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat nostrum expedita sunt. Est voluptate molestiae quos doloremque! Nihil fugiat tempora quae voluptate provident hic minima sequi dolores eius cumque!
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>

            </div>


        </div>
    </section>
  );
};

export default About;
