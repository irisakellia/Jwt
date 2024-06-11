const userService = require("../services/signup");

async function createUser(req,res){
    try {
        
        const {name, email, password} = req.body;
        const user = await userService.createUser({name, email, password});
        res.status(200).json({user:user, message:"user been created successfully"});

    } catch (error) {
        res.status(400).json({ message:" can not create user"});
    }
}

module.exports = {createUser}


