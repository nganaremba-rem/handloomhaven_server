const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, 'Please provide the Product Name'],
    },
    itemSize: {
      type: Array, // array of numbers
    },
    itemPrice: {
      type: Number,
    },
    itemDescription: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    noOfItemInStock: {
      type: Number,
    },
    orderedHistory: {
      type: Array, // array of user with deliveryStatus
    },
    noOfPurchased: {
      type: Array, // can be derived from orderedHistory
    },
    ratings: {
      type: Array, // array of number
    },
    noOfUsersRated: {
      type: Number,
    },
    comments: {
      type: Array,
    },
    category: {
      type: String,
    },
    discountPercentage: {
      type: Number,
    },
    colors: {
      type: Array, // array of strings
    },
    forMen: {
      type: Boolean,
    },
    forWomen: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Product', productSchema)
