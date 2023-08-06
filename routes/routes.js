const router = require('express').Router()

// Routes
const userRoutes = require('./users.routes')
const imageRoutes = require('./images.routes')
const sellerRoutes = require('./seller.routes')
const adminRoutes = require('./admin.routes')

router.use('/user', userRoutes)
router.use('/images', imageRoutes)
router.use('/seller', sellerRoutes)
router.use('/admin', adminRoutes)

module.exports = router
