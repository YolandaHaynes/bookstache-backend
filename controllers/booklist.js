const models = require('../models');

const createBooklist = async (req, res) => {
  try {
    const book_list = await models.book_list.create(req.body);
    return res.status(201).json({
      book_list,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const addBook = async (req, res) => {
  res.send(req.params.bookListId)
}


module.exports = {
  createBooklist,
  addBook,
}