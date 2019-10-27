import React, { Component } from 'react';
import "./Search.css";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";

class SearchPage extends Component {
// onClick for the submit button.
// That on click event should call a function in your react component.
// That function from step 2 will make the api request to your server using axios. The request should be sending the book title that the user typed in with the request. 

    state = {
        books: [],
        title: ""
    }


    loadBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data.items, title: ""})
            })
            .catch(err => console.log(err));
    };


    // componentDidMount = () => {
    //     this.loadBooks();
    // };


    getBooks = (q) => {
        API.getBooks(q)
            .then(res => this.setState({ books: res.data, title: "" }))
            .catch(err => console.log(err));
    };


    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.title) {
            API.getBooks({
                title: this.state.title
            })
            .then(res => {
                // console.log(res);
                this.setState({ books: res.data.items });
                console.log(this.state.books);
            })
            .catch(err => console.log(err));
        }
    };


    render () {
        return (
            <main>
                <Jumbotron />
                <div className="search__field">
                    <form className="search__bar"><input 
                        value={this.state.title}
                        onChange={this.handleInputChange} 
                        name="title"
                        type="text"
                        placeholder="  Find a Book">
                        </input>
                    </form>   
                </div>
                <div className="spacer"></div>
                <div className="submit__button">
                    <button onClick={this.handleFormSubmit} className="submit__btn btn btn-primary">GOOGLE SEARCH</button>
                </div>
                <div>
                {this.state.books.map(
                    (book) => {
                        console.log(book.volumeInfo.title);
                        return <div className="books-list" key={book.id}>
                            {book.volumeInfo.title}
                        </div>
                    }
                )}
                </div>
            </main>
        )
    };
};


export default SearchPage;