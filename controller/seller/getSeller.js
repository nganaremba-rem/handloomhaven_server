const SellerCollection = require('../../model/sellerModel')

const getSellerUsingEmail = async (email) => {
  try {
    return await SellerCollection.findOne({ email })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getSellerUsingEmail,
}
