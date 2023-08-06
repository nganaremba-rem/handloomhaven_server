const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const os = require('os')
const connectToDB = require('./config/db')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// Connecting to MongoDB
connectToDB()

// Importing Routes
const routes = require('./routes/routes')
const errorHandler = require('./middlewares/errorHandler')

// Middlewares
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Route
app.use('/api', routes)

// Custom Error Handler to overwrite express error handler
// ======== use Error handler after handling all routes ===
app.use(errorHandler)

console.log(
  os.networkInterfaces().wlp13s0.find((item) => item.family === 'IPv4').address
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
