const router = require('express').Router()
const {
  loginUser,
  registerUser,
  getUserById,
  getAllUser,
} = require('../controller/users.controllers')

// Register User
router.post('/register', registerUser)

// Login User
router.post('/login', loginUser)

// Get All User
router.get('/getAllUser', getAllUser)

// Get user by Id
router.get('/:id', getUserById)

module.exports = router
