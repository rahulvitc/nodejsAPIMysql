const { createUser, getUserById, getAllUsers } = require('./user.controller');
const { getUser } = require('./user.controller');
const router = require('express').Router();

router.post('/',createUser);

router.get('/:id', getUserById);

router.get('/', getAllUsers);


module.exports = router;