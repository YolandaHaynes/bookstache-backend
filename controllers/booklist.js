const models = require('../models');

const createBooklist = async (req, res) => {
  try {
    const book_list = await models.Book_lists.create(req.body);
    return res.status(201).json({
      book_list,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const addBook = async (req, res) => {
  console.log(req.params.bookListId)
  res.send(req.params.bookListId)
}

const getBookList = async (req, res) => {
  try {
    // console.log(models.Book_lists)
    // console.log(req.params.bookListId)
    const search = await models.Book_lists.findByPk(req.params.bookListId);
    res.send(search);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createBooklist,
  addBook,
  getBookList,
}