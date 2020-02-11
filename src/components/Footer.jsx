import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faComment, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.scss';


const Footer = ({comment, share, like, message}) => {
    return (  
        <div className="row-buttons">
            <ul>
                <li> <FontAwesomeIcon icon={faComment} color="gray" />{`${comment}`}  </li>
                <li> <FontAwesomeIcon icon={faRetweet} color="#33cc33" />  {`${share}`} </li>
                <li> <FontAwesomeIcon icon= {faHeart} color="red" /> {`${like}`} </li>
                <li> <FontAwesomeIcon icon= {faEnvelope} color="gray" /> {`${message}`} </li>
            </ul>
        </div>
    )
}

export default Footer;

 