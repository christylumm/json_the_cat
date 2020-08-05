const request = require("request");

//Endpoint that will allow us to search breed information:
//https://api.thecatapi.com/v1/breeds/search

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(`There was an error that occurred: ${error}`, null);
    } 
    
    const data = JSON.parse(body)[0];
    
    //if breed not found or left empty
    if (data) {
      callback(null, data.description);
    } else {
      callback("Sorry! We couldn't find that breed", null);
    }

/*     if (data[0] === undefined || data[0] === []) {
      callback("Oops! The breed you're looking for cannot be found", null);
    } else {
      let description = data[0].description;
      callback(error, description);
    } */
    
  });
};

module.exports = { fetchBreedDescription };