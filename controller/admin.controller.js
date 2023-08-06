const asyncHandler = require('express-async-handler')
const AdminCollection = require('../model/adminModel')
const messages = require('../utils/messages')

const registerNewAdmin = asyncHandler(async (req, res) => {
  const { email } = req.body

  const admin = await AdminCollection.findOne({ email })

  // if admin with the same email exist
  if (admin) {
    res.status(400)
    throw new Error('Admin email already exist')
  }

  // Create new admin
  const newAdmin = await AdminCollection.create(req.body)
  if (!newAdmin) {
    res.status(500)
    throw new Error('Cannot create admin. Something went Wrong')
  }

  res.status(201).json({ message: 'Admin created successfully' })
})

// Request new Seller to admin

const requestNewSellerAccount = async (seller) => {
  // getting details from client

  if (!seller) {
    throw new Error('Please send a seller')
  }

  const response = await AdminCollection.updateOne(
    { email: 'nganaremba@gmail.com' },
    {
      $push: {
        newSellerAccountRequest: seller,
      },
    }
  )

  if (!response) {
    throw new Error('Unable to request new seller to admin')
  }

  return { message: messages.sellerRequestedToAdminSuccess }
}

module.exports = {
  registerNewAdmin,
  requestNewSellerAccount,
}
