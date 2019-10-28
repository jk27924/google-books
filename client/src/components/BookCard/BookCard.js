import React from 'react';

const BookCard = (props) => {
    return (
        <div className="book-card-container">
            <img src={props.image} alt=""/>
            <div className="description">
                <h3>{props.authors}</h3>
                <h3>{props.description}</h3>
                <p>{props.link}</p>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default BookCard;