import React from "react";
import "./App.css";
import Navbar from "./components/Nav/Nav";
// import Jumbotron from "./components/Jumbotron/Jumbotron"
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./components/Pages/Search";
// import SavedPage from "./components/Pages/Saved";


function App() {
  return (
    <Router>
      <div className="App">
          <div className="App-header">
            <Navbar />
            <Route exact path="/" component={SearchPage} />
            {/* <Route exact path="/SavedPage" component={SavedPage} /> */}
          </div>
      </div>
    </Router>
  );
}


export default App;
