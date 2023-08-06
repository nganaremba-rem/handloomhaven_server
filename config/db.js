const mongoose = require('mongoose')

async function connectToDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to MongoDB`, conn.connection.host)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectToDB
