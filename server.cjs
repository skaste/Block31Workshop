const http = require("http");

const pets = require("./database.js");
//create a const for express
const express = require("express");

const app = express();

//Create four API endpoints and include the (req, res)
//app.get() for all pets
app.get("/api/v1/pets", (req, res) => {
  res.send(pets);
});
//app.get() for pets by name
app.get("/api/v1/pets/:name", (req, res) => {
  const { name } = req.params;
  res.send(`${name}`);
});
//app.get() for pets by owners names
app.get("/api/v1/pets/owner");
//create a port variable called PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Listening on port ${PORT}");
});
