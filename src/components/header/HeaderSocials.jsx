import React from 'react';

import{BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
    return ( 
        <div className='header__socials'>
            <a href="https://linkedin.com/in/jeewan-sharma-322b69137/" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/Jeewan-Sharma" target='_blank'><BsGithub/></a>
            <a href="https://www.facebook.com/jeewansharma123/" target='_blank'><BsFacebook/></a>
        </div>
     );
}
 
export default HeaderSocials;