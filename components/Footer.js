import React from 'react';
import { SiTwitter, SiGithub } from "react-icons/si";
import { GrMail } from "react-icons/gr";

const Footer = ({ home }) =>
{
    return (
        <>

            <footer className={home ? 'footer-index' : 'footer'}>Not all who wander are lost - 🖖🏾
                {/* <ul className='footer-icons'>
                    <li><SiTwitter /></li>
                    <li><SiGithub /></li>
                    <li><GrMail /></li>
                </ul> */}
            </footer>
        </>
    );
};

export default Footer;