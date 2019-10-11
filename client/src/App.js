import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Nav/Nav";




class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <Navbar />
            <h2>Welcome to React</h2>
          </div>
      </div>
    );
  }
}

export default App;
