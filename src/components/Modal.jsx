import React from 'react';
import '../styles/components/Modal.scss';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoBasDePage from '../assets/imgBasDePageGa-removebg-preview.png';


function Modal(props) {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <span className="close-button" onClick={props.onClose}>&times;</span>
                    <h2>Bienvenue sur mon site !</h2>
                    <p>Il est encore en cours de construction, alors soyez indulgent s'il vous plaît. <br />
                        Passez un agréable moment et à très vite !
                    </p>
                </div>
                <nav>
                    <ul>
                        <li className='item-insta-modal'>
                            <a href="https://www.facebook.com/profile.php?id=61556910890943" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size='2x' className="rounded-icon" />
                            </a>
                        </li>
                        <li className='item-img-modal'>
                            <img src={logoBasDePage} alt="représentation d'une feuille" />
                        </li>
                        <li className='item-facebook-modal'>
                            <a href="https://www.instagram.com/gaa.therapie/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} size='2x' className="rounded-icon" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Modal;
