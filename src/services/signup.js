const user = require("../models/user");
const bcrypt = require("bcrypt");


async function createUser(userData) {
    const {name, email, password} = userData;
    const hashedPassword = await bcrypt.hash(password, 10 );

   const createdUser = new user({
    name,
    email,
    hashedPassword,
    role:"customer"
   })

   const savedUser = await createdUser.save();

   return savedUser;


}

module.exports = { createUser}