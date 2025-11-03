const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch'); // Install node-fetch if necessary

// Replace with your actual Algolia App ID and Admin API Key
const client = algoliasearch(
  import.meta.env.ALGOLIA_APP_ID,
  import.meta.env.ALGOLIA_SEARCH_ONLY_API_KEY
);

const index = client.initIndex('movies');

// Fetch the sample dataset
fetch('https://dashboard.algolia.com/sample_datasets/movie.json')
  .then((response) => response.json())
  .then((records) => {
    // Save the records to Algolia
    index
      .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
      .then(({ objectIDs }) => {
        console.log('Data indexed successfully:', objectIDs);
      })
      .catch((error) => {
        console.error('Error indexing data:', error);
      });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
