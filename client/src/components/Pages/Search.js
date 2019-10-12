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
            .then(res =>
                this.setState({ books: res.data, title: ""})
            )
            .catch(err => console.log(err));
    };


    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.title) {
        API.saveBook({
            title: this.state.title,
        })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
    };

    render () {
        return (
            <main>
                <Jumbotron />
                <div className="search__field">
                    <form className="search__bar"><input onChange={this.loadBooks} type="text"></input></form>   
                </div>
                <div className="spacer"></div>
                <div className="submit__button">
                    <button onClick={this.handleFormSubmit} className="submit__btn btn btn-primary">GOOGLE SEARCH</button>
                </div>
            </main>
        )
    };
};

export default SearchPage;
