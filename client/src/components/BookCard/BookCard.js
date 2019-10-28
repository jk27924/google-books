import React from 'react';
import './BookCard.css';

const BookCard = (props) => {
    return (
        <div className="book-card-container col-md-4">
            <div className="content">
                <img className="book-image" src={props.image} alt="book-image"/>
                <div className="general-description">
                    <h2 className="title-spacer">{props.title}</h2>
                    <h3>{props.authors}</h3>
                    <h3 className="book-description">{props.description}</h3>
                    <p>{props.link}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard;