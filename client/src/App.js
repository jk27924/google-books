import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Nav/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import HomePage from "./components/Pages/HomePage";
import SavedArticle from "./components/Pages/SavedArticle";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <Navbar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/SavedArticle" component={SavedArticle} />
            <h2>Welcome to React</h2>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
