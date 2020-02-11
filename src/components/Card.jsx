


import React from 'react';
import '../styles/Card.scss';

const DescriptionCard = ({title_card, text_card, link_card}) => {
    return (
        <div className="card-main">  
            <img src="https://i.ibb.co/qDNY5vx/card.png" alt="card" border="0" /> 
            <div className="text-card">
            <h4> {`${title_card}`} </h4>
            <p> {`${text_card}`} </p>
            <p className="link-card">{`${link_card}`} </p>
            </div>
        </div>

    )
}


export default DescriptionCard;

