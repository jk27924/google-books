import React from 'react';
import BookCard from "../BookCard/BookCard";

const BookList = (props) => {
    return (
        <div className="books-card-list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                key={i}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.infoLink}
                                title={book.volumeInfo.title}
                            />
                })
            }
        </div>
    )
}

export default BookList;