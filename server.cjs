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

  // Find the pet with the specified name in the pets array
  const foundPet = pets.find(
    (pet) => pet.name.toLowerCase() === name.toLowerCase()
  );

  if (foundPet) {
    // If a matching pet is found, send back the pet object
    res.json(foundPet);
  } else {
    // If no matching pet is found, send an appropriate response
    res.status(404).json({ error: "Pet not found" });
  }
});
//app.get() for pets by owners names
app.get("/api/v1/pets/owner");
//create a port variable called PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
