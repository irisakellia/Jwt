const userService = require("../services/signup");


async function createUser(req,res){
    try {
        
        const {name, email, password} = req.body;
        const user = await userService.createUser({name, email, password});
        res.status(200).json({success:true , message:"user been created successfully"});

    } catch (error) {
        res.status(400).json({success:false, message:" can not create user"});
    }
}

module.exports = {createUser}



