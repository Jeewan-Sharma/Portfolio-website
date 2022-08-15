import React from "react";
import "./footer.css";

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        JEEWAN SHARMA
      </a>

      <ul className="permalinks">
        <li><a href ='#'>Home</a></li>
        <li><a href ='#'>About</a></li>
        <li><a href ='#'>Experience</a></li>
        <li><a href ='#'>Portfolio</a></li>
        <li><a href ='#'>Contact</a></li>
      </ul>

      <div className="footer__socials">
          <a href="http://facebook.com"><FaFacebookF /></a>
          <a href="http://instagram.com"><FiInstagram /></a>
          <a href="http://twitter"><IoLogoTwitter/></a>          
      </div>

      <div className="footer__copyright">
          <small>
              &copy; Jeewan Sharma. All rights reserved
          </small>
      </div>
    </footer>
  );
};

export default Footer;
