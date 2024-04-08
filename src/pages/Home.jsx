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
import Card from '../components/Cards';
import Soin1 from '../assets/soin1.png';
import Soin2 from '../assets/soin2.png';
import Soin3 from '../assets/soin3.png'


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
                        <img src={H1} alt="A la rencontre de la Thérapie et du Bien-être" />
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
                            un univers de soins thérapeutiques. <br />
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
                <section className="liste-soins">
                    <h2>Les Soins</h2>
                    <ul>
                        <li className="soin1">
                            <Card
                                imageUrl={Soin1}
                                imageAlt="Image représentant une plante"
                                title={`
                                    Massage <Br/> Thérapeutique
                                `}
                            />
                        </li>
                        <li className="soin2">
                        <Card
                                imageUrl={Soin2}
                                imageAlt="Image représentant une plante"
                                title={`
                                    Massage <Br/> Thérapeutique
                                `}
                            />
                        </li>
                        <li className="soin3">
                        <Card
                                imageUrl={Soin3}
                                imageAlt="Image représentant une plante"
                                title={`
                                    Massage <Br/> Thérapeutique
                                `}
                            />
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;