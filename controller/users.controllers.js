const messages = require('../utils/messages')
const { addNewUserToDatabase } = require('./users/addUser')
const { getUserByEmailOrPhone } = require('./users/getUser')
const bcrypt = require('bcryptjs')
const User = require('./../model/userModel')
const asyncHandler = require('express-async-handler')

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns
 *
 */

const registerUser = asyncHandler(async (req, res, next) => {
  console.log(req.body)
  // Get the user by their email or password
  const user = await getUserByEmailOrPhone(
    req.body?.email,
    req.body?.phoneNumber
  )

  // if user already exist return with a message
  if (user) {
    res.status(400)
    throw new Error(messages?.userExists)
  }

  // Register new user
  // First hash the password
  const hashedPassword = await bcrypt.hash(req.body?.password, 10)
  // Add new user to database
  const newUser = await addNewUserToDatabase({
    ...req.body,
    password: hashedPassword,
  })

  if (!newUser) {
    res.status(400)
    throw new Error(messages.userNotFound)
  }

  return res.status(201).json({ message: messages.registeredSuccess })
})

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns
 */

const loginUser = asyncHandler(async (req, res, next) => {
  // Get user details
  const { email_phone, password } = req.body

  // check if user exists
  let user = await getUserByEmailOrPhone(email_phone)

  if (!user) {
    res.status(400)
    throw new Error(messages.userNotFound)
  }

  // Check password matches
  if (!(await bcrypt.compare(password, user?.password))) {
    res.status(400)
    throw new Error(messages.wrongPassword)
  }

  //  TODO: add jwt authentication

  delete user._doc.password
  // send back the user
  return res.status(200).json({ ...user._doc })
})

const getUserById = asyncHandler(async (req, res, next) => {
  const { id } = req.params
  const user = await User.findById(id)
  console.log(user)
  if (!user) throw new Error(messages.userNotFound)

  res.status(200).json(user)
})

const getAllUser = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find()
  if (!allUsers) throw new Error('Cannot get user')
  res.status(200).json(allUsers)
})

module.exports = {
  registerUser,
  loginUser,
  getAllUser,
  getUserById,
}
