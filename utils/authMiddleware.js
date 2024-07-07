const jwt = require('jsonwebtoken');
const secretKey = require('../configuration/jwtConfig')

function authenticateToken(req,res,next){

    const authHeader = req.header("Authorization");

    if(!authHeader){
        return res.status(401).json({message:"Unauthorised: Missing token!"})
    }

    const [bearer, token] = authHeader.split(" ");
    if(!bearer || !token){
        return res.status(401).json({message:"Unauthorised: Invalid token format"});
    }

    jwt.verify(token, secretKey,(err, user)=>{
        if(err){
            return res.status(403).json({message:"Forbidden: Inavlid Token"})
        }
        req.user = user;
        next();
    })

}

module.exports = {authenticateToken} ;