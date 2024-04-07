import React from 'react';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/Footer.scss'
import logoBasDePage from '../assets/imgBasDePageGa-removebg-preview.png';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li className='item-insta'>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size='2x' className="rounded-icon" />
                    </a>
                </li>
                <li className='item-img'><img src={logoBasDePage} alt="" /></li>
                <li className='item-facebook'>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} size='2x' className="rounded-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;