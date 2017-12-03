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

    return images;
  });
}

findGif('thot');

var data = [
                {BookTitle: "Don Quixote",                              Author: "Miguel de Cervantes",      OriginalPublicationDate:1612},
                {BookTitle: "A Tale of Two Cities",                     Author: "Charles Dickens",          OriginalPublicationDate:1859},
                {BookTitle: "The Fellowship of the Ring",               Author: "J. R. R. Tolkien",         OriginalPublicationDate:1954},
                {BookTitle: "The Two Towers",                           Author: "J. R. R. Tolkien",         OriginalPublicationDate:1954},
                {BookTitle: "The Hobbit",                               Author: "J. R. R. Tolkien",         OriginalPublicationDate:1937},
                {BookTitle: "The Little Prince",                        Author: "Antoine de Saint-Exupery", OriginalPublicationDate:1943},
                {BookTitle: "The Return of the King",                   Author: "J. R. R. Tolkien",         OriginalPublicationDate:1955},
                {BookTitle: "Harry Potter and the Philosopher's Stone", Author: "J. K. Rowling",            OriginalPublicationDate:1997},
                {BookTitle: "And Then There Were None",                 Author: "Agatha Christie",          OriginalPublicationDate:1939},
                {BookTitle: "Alice In Wonderland",                      Author: "Lewis Carroll",            OriginalPublicationDate:1865}
            ];
