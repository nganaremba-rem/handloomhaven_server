// You need all the parameters including next otherwise it won't work
const errorHandler = (err, _req, res, _next) => {
  const statusCode = res?.statusCode ? res?.statusCode : 500

  res.status(statusCode).json({ message: err?.message })
}

module.exports = errorHandler
