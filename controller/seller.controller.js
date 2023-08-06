const asyncHandler = require('express-async-handler')
const SellerCollection = require('../model/sellerModel')
const { getSellerUsingEmail } = require('./seller/getSeller')
const messages = require('../utils/messages')
const { requestNewSellerAccount } = require('./admin.controller')

const registerSeller = asyncHandler(async (req, res) => {
  const { email } = req.body
  // ! need to check

  //   Validation
  // * email unique
  const seller = await getSellerUsingEmail(email)

  //   if already exist
  if (seller) {
    res.status(400)
    throw new Error(messages.sellerExist)
  }

  //   Make new request and create for approval from ADMIN

  await requestNewSellerAccount(req.body)

  const newSeller = await SellerCollection.create(req.body)

  if (!newSeller) {
    res.status(500)
    throw new Error(messages.sellerCreationError)
  }

  res.status(201).json({ message: messages.sellerCreationSuccess })
})

// Login seller
const loginSeller = asyncHandler(async (req, res) => {
  res.send()
})

module.exports = {
  registerSeller,
  loginSeller,
}
