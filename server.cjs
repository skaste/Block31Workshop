//create a const for express
const express = require("express");

const app = express();

//create a port variable called PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Listening on port ${PORT}");
});
//Create four API endpoints and include the (req, res)
//app.get() for all pets
//app.get() for pets by name
//app.get() for pets by owners names
