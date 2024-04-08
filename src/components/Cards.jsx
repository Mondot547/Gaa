import React from 'react';
import '../styles/components/Cards.scss'; // Fichier de style pour la carte

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.imageAlt} className="card-image" />
            <div className="card-content">
                <h3 className="card-title" dangerouslySetInnerHTML={{ __html: props.title }}></h3>
            </div>
        </div>
    );
}

export default Card;
