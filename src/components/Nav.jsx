import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logoGaa.webp';
import '../styles/components/Nav.scss';


const Nav = () => {
    return (
        <>
            <nav>
                <img src={Logo} alt="logo Gaa" />
                <ul>
                    <li>
                        <Link to='/'>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to='/Presentation'>
                            Présentation
                        </Link>
                    </li>
                    <li>
                        <Link to='/Soins'>
                            Soins
                        </Link>
                    </li>
                </ul>
                <Link className='btn-contact' to='/Contact'>
                    Contactez-moi
                </Link>
            </nav>
        </>
    );
};

export default Nav;