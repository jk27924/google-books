import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron"




class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <Navbar />
          </div>
          <Jumbotron />

      </div>
    );
  }
}

export default App;
