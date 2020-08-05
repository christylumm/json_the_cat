const request = require("request");

//Endpoint that will allow us to search breed information:
//https://api.thecatapi.com/v1/breeds/search

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, body) => {
    if (error !== null) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);

      //if breed not found or left empty
      if (data[0] === undefined || data[0] === []) {
        callback("Oops! The breed you're looking for cannot be found", null);
      } else {
        let description = data[0].description;
        callback(error, description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };