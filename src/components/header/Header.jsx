import React from "react";
import './header.css'

import ME from '../../assets/me.png'

import CTA from './CTA'
import HeaderSocials from "./HeaderSocials";

const Header = () =>{
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Sharma Jeewan</h1>
                <h5 className="text-light">Front-end Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt='me'/>
                </div>

                <div>
                    <a href="#contact" className="scroll__down">Scroll Down</a>
                </div>
            </div>
        </header>
    )
}

export default Header