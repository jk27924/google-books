import React, { Component } from 'react';
import "./Search.css";
import Jumbotron from "../Jumbotron/Jumbotron";

class SearchPage extends Component {
    render () {
        return (
            <main>
                <Jumbotron />
                <div className="search__field">
                    <form className="search__bar"><input type="text"></input></form>   
                </div>
                <div className="spacer"></div>
                <div className="submit__button">
                    <button className="submit__btn btn btn-primary">SUBMIT</button>
                </div>


            </main>
        )
    };
};

export default SearchPage;
