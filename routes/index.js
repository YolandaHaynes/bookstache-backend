const { Router } = require('express');
const users = require('../controllers/users');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/user', users.createUser);

module.exports = router;
