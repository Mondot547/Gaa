import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/logoGaa.webp';
import '../styles/components/Nav.scss';


class Nav extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>
                <nav>
                    <div className="desktopNav">
                        <Link to='/'><img src={Logo} alt="logo Gaa" /></Link>
                        <ul>
                            <li>
                                <NavLink to='/'>
                                    Accueil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Presentation'>
                                    Présentation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Soins'>
                                    Soins
                                </NavLink>
                            </li>
                        </ul>
                        <Link className='btn-contact' to='/Contact'>
                            Contactez-moi
                        </Link>
                    </div>
                </nav>
            </>
        );
    };
};
export default Nav;