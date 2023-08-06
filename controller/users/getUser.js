// const fs = require('fs');
// const path = require('path');
const User = require('../../model/userModel')

const getUserByEmailOrPhone = async (email = false, phoneNumber = false) => {
  // return new Promise(async (resolve, reject) => {
  //     try {
  //         fs.readFile(path.join(__dirname, "../../public/db.json"), "utf8", (err, data) => {
  //             if(err) throw new Error(err);
  //             let db = JSON.parse(data)
  //             const user = db?.users?.find(user => user.email_phone === email_phone);
  //             if(user) return resolve(user);
  //             return resolve(null)
  //         })
  //     } catch(err) {
  //         reject(err)
  //     }
  // })
  const user =
    (await User.findOne({ email })) || (await User.findOne({ phoneNumber }))

  return user
}

module.exports = {
  getUserByEmailOrPhone,
}
