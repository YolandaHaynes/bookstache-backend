const Books = require('../models/Books');
const axios = require('axios')



const searchByIsbn = async(req,res) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${req.query.isbn}&key=${process.env.key}`;
    // console.log('req', req)
        axios
            .get(url)
            .then(response => {
                let book = response.data
                //checking to see if there's books from the api and then reassigning book variable 
                if (book.items && book.items.length > 0 ){
                  book = book.items[0].volumeInfo
                } else {
                  res.send({error: "not found"})
                }
                // console.log(book)
                const constructedBook = {
                  title: book.title ? book.title : "",
                  image: book.imageLinks ? book.imageLinks.thumbnail : "",
                  author: book.authors ? book.authors[0] : "n/a",
                  isbn10 : book.industryIdentifiers[0].identifier,
                  isbn13 : book.industryIdentifiers[1].identifier,
                  description: book.description,
                };
                console.log(constructedBook)
                res.send(constructedBook)
            })
            .catch(error =>{
                res.send(500)
            })
  }

  const searchByTitle = async (req, res) => {
    const url=`https://www.googleapis.com/books/v1/volumes?q=intitle:${req.query.title}&key=${process.env.key}`;
    axios
        .get(url)
        .then(responseTitle => {
            //reference bookTitleResults as an array
            let bookTitleResults = responseTitle.data.items
            let titles = [];
            bookTitleResults.forEach(bookResult => 
                {
                    let book = {
                        title: bookResult.volumeInfo.title
                    }
                    titles.push(book)
                    // console.log(bookResult)
                })
            res.send(titles)
        })

  }

  module.exports = {
    searchByIsbn,
    searchByTitle,
  }




