const { Router } = require('express');
const users = require('../controllers/users');
const books = require('../controllers/books');
const booklist = require('../controllers/booklist')

const router = Router();

// router.get('/', (req, res) => res.send('Welcome'))

router.post('/user', users.createUser);
// router.get('/books',(req, res) => res.send(createBooklist) )
router.get('/searchByIsbn',books.searchByIsbn)
router.get('/searchByTitle', books.searchByTitle)
router.put('/booklist/:bookListId/addBook', booklist.addBook)

module.exports = router;
