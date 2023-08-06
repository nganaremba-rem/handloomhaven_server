const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
    },
    password: {
      type: String,
    },
    carts: {
      type: Array, // change this to array of Products
    },
    orders: {
      type: Array, // change this to array of Products
      // A product needs to have array of user id of who have ordered
      // and with their delivery details
    },
    firstName: {
      type: String,
      required: [true, 'Please provide First Name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide Last Name'],
    },
    address: {
      type: Array, // change this to array of address
    },
    paymentOptions: {
      type: Array, // change this to array of save payment option
    },
    profilePicUrl: {
      type: String,
    },
    recentViewItems: {
      type: Array, // change this to Array of Products
    },
    recentSearchHistories: {
      type: Array, // change to array of string
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)
