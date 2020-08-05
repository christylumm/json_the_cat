const { fetchBreedDescription } = require('./breedFetcher.js');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error !== null) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});