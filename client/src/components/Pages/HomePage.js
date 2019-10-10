import React, { Component } from 'react';
import '../../App.css';
import Navbar from "../Nav/Nav";
import Jumbotron from "../Jumbotron/Jumbotron";
import API from '../../utils/API';
// import ArticleBody from '../ArticleBody/ArticleBody';
// import Footer from "../Footer/Footer";



class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };
  

  render () {
    return (
      <div style={{height: "100%"}}>
          <Navbar /> 
          <main style={{marginTop: "64px"}}>
            <Jumbotron />
            {/* <ArticleBody
              articles={this.state.articles} /> */}
            {/* <Footer /> */}
          </main>
      </div>
    )
  }


  
}

export default App;
