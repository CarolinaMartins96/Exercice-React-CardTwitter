 
import React from 'react';
import '../styles/Header.scss';

const Header =({mytitle, info, subtitle, author, name_author}) => {
    return (
        <div className="row-header">
            <h4 className="Title-card"> {`${mytitle}`} <span> {`${info}`}  </span></h4>
            <p>{`${subtitle}`} </p>
            <p className="author p"> {`${author}`} <span> {`${name_author}`} </span> </p>
        </div>
    )

}
export default Header;
