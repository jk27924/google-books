import React, { Component } from 'react';
import "./Saved.css";
// import API from "../../utils/API";
import Jumbotron from "../Jumbotron/Jumbotron";

class SavedPage extends Component {
    render () {
        return (
            <main>
                <Jumbotron />
                <div className="saved__field">
                    <h2>YOUR SAVED BOOKLIST</h2>
                </div>
            </main>
        )
    };
}


export default SavedPage;
