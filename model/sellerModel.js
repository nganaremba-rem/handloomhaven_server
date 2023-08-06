const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide email address'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    aadhaarNumber: {
      type: Number,
      required: [true, 'Please provide aadhaar number'],
    },
    panNumber: {
      type: String,
      required: [true, 'Please provide a PAN Number'],
    },
    address: {
      type: Object,
      required: [true, 'Please provide an address'],
    },
    productList: {
      type: Array, // array of products
    },
    profileImageUrl: {
      type: String, // change to url if available
    },
    notifications: {
      type: Array, // array of notifications
    },
    messages: {
      type: Array, // array of messages
    },
    shopLicense: {
      type: String, // NOT SURE ABOUT THIS
    },
    bankAccountDetails: {
      type: Object,
      required: [true, 'Please provide a bank account'],
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Seller', sellerSchema)
