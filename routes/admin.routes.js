const router = require('express').Router()

// Routes
const { registerNewAdmin } = require('../controller/admin.controller')

router.post('/register', registerNewAdmin)

module.exports = router
