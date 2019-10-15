import App from "../../client/src/App";

const axios = require("axios");
const express = require("express");


// Initialize Express
var app = express();


app.get("/books", function(req, res) {

    axios.get("https://www.googleapis.com/books/v1/volumes").then(function(response) {
    console.log(response);

    var data = {
          title: title,
          authors: authors,
          description: description,
          image: image,
          link: link,
          isSaved: false
        }
  
        // db.Article.insert(data);
        
        // results.push(data);
      });
  
      res.send(response);
    
    })

// make sure to return sth like App

return App;