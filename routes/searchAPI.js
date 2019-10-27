const axios = require("axios");


module.exports = {
  findAll: function(req, res) {
    const { query } = req;
    console.log(query.title);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query.title}`)
      .then(books => res.json(books.data))
      .catch(err => res.status(422).json(err));
  }
};