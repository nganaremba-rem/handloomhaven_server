// const fs = require("fs")
// const path = require("path")
const User = require('../../model/userModel')

const addNewUserToDatabase = async (data) => {
  // return new Promise(async (resolve, reject) => {
  //     try {
  //         const userData = {email_phone, fullName, address, password: hashedPassword}
  //         fs.readFile(path.join(__dirname, "../../public/db.json"), 'utf8', (err, data) => {
  //             if(err) throw new Error("Cannot readfile");
  //             const newDb = JSON.parse(data)
  //             newDb.users.push(userData)
  //             fs.writeFile(path.join(__dirname, "../../public/db.json"), JSON.stringify(newDb), (err) =>{
  //                 if(err) throw new Error("file reading failed")
  //                 resolve(userData)
  //             })
  //         })
  //     } catch(error) {
  //         reject(error)
  //     }
  // })
  const response = await User.create(data)

  if (response) return response
}

module.exports = { addNewUserToDatabase }
