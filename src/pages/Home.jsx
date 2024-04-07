import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import '../styles/pages/Home.scss';
import Plante from '../assets/imageArrondiAuTop.jpg';
import Footer from '../components/Footer';
import Hey from '../assets/hey.png';
import Separateur from '../components/Separateur';
import H1 from '../assets/h1-header.png';
import Modal from '../components/Modal';
import Cookies from 'js-cookie';


const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const modalShow = Cookies.get('modalShow');
        if (!modalShow) {
            setIsModalOpen(true);
            Cookies.set('modalShow', 'true', { expires: 1 });
        }
    }, []); // Ouvrir la modal lors du chargement de la page

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {isModalOpen && <Modal onClose={closeModal} />}
            <header>
                <Nav />
                <div className='bandeau'>
                    <h1>
                        <img src={H1} alt="Titre de la page" />
                    </h1>
                </div>
            </header>
            <main>
                <Separateur />
                <section className='accroche'>
                    <aside className="img">
                        <img src={Plante} alt="#" />
                    </aside>
                    <div className='presenterGaa'>
                        <img src={Hey} alt="Titre h1 HEY" />
                        <p>
                            <span>Bienvenue chez Gaa</span>,<br />
                            un univers de soins thérapeutiques.
                            Je m'appelle <span>Agathe</span>,<br />
                            masseur-kinésithérapeute de formation
                            je vous propose mon savoir faire et mon
                            expertise au travers de différents soins.
                        </p>
                        <div className="btn-about">
                            <Link to='/Presentation' className="about">En savoir plus</Link>
                        </div>
                    </div>
                </section>
                <Separateur />
            </main>
            <Footer />
        </>
    );
};

export default Home;