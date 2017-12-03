//=========================================================================================================================================
//This data quizzes users about the author and publication dates of well-known books.
//Data for this list came from: https://en.wikipedia.org/wiki/List_of_best-selling_books
//=========================================================================================================================================

// require request package
const request = require('request');

// giphy base url
const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating";

function findGif(query) {

  // image rating
  const rating = 'pg-13';

  // request options
  const options = {
    url: `${baseUrl}&q=${query}&rating=${rating}`,
    dataType: 'json'
  };

  // get request
  request.get(options, (err, response, imageObj) => {
    if (err) {
      console.log('There was an error: ' +  err);
      return;
    }

    // parsed images
    const images = JSON.parse(imageObj).data;



    // return first result
    return images[0];
  });
}
