import React from 'react';
import './BookCard.css';

const BookCard = (props) => {
    return (
        <div className="book-card-container col-md-6">
            <img className="book-image" src={props.image} alt="book-image"/>
            <div className="general-description">
                <h3>{props.authors}</h3>
                <h3>{props.description}</h3>
                <p>{props.link}</p>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default BookCard;