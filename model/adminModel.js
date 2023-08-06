const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  productApprovalRequest: {
    type: Array, // array of products with their seller info
  },
  acceptedList: {
    type: Array, // array of products accepted
  },
  declinedList: {
    type: Array, // array of products declined,
  },
  newSellerAccountRequest: {
    type: Array, // array of new seller account
  },
  messages: {
    type: Array, // array of messages
  },
})

module.exports = mongoose.model('Admin', adminSchema)
