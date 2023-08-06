const router = require('express').Router()
const {
  registerSeller,
  loginSeller,
} = require('../controller/seller.controller')

// Register seller
router.post('/register', registerSeller)

// Login seller
router.post('/login', loginSeller)

module.exports = router
