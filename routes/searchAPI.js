const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${params}`)
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};