const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const googleAPI = require("./routes/searchAPI");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes
app.use("/books", googleAPI.findAll);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB database named `googlebooks` 
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });


// Send every other request to the React app
// Define any API routes before this runs
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
  // });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
