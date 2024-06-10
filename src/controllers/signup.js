const userService = require("../services/signup");

async function createUser(req,res){
    try {
        
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({user:user, message:"user been created successfully"});

    } catch (error) {
        res.status(400).json({ message:" can not create user"});
    }
}

module.exports = {createUser}