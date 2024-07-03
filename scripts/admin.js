const User = require('../models/User');
const bcrypt = require('bcrypt');


async function createAdminAccount(){
    try {
        
const presentAdmin = await  User.findOne ({ email: "admin@test.com"});
if(!presentAdmin){

    const newAdmin = new User({
        email:"admin@test.com",
        name:"Admin",
        password: await bcrypt.hash("admin", 10),
        role:"admin"
    })

    await newAdmin.save();
    console.log("admin account created successfully");
} else {
    console.log("admin already exists")
}


    } catch (error) {
        console.error(error.message)
    }

}

module.exports = createAdminAccount ;