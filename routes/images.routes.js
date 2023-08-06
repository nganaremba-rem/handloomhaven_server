const os = require('os')
const router = require('express').Router()

router.get('/:id', (req, res) => {
  const { id } = req.params
  const ipAddr = os
    .networkInterfaces()
    .wlp13s0.find((item) => item.family === 'IPv4').address

  const devImageUrl = `${req.protocol}://${ipAddr}:${req.socket.localPort}`

  console.log(`${devImageUrl}/images/${id}.jpg`)
  res.json({ imageUrl: `${devImageUrl}/images/${id}.jpg` })
})

module.exports = router
