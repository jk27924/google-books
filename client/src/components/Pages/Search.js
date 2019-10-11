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
            </main>
        )
    };
};

export default SearchPage;
