const mongoose = require('../configuration/dbConfig.js');

const userSchema = new mongoose.Schema({

    name: String,
    email:String,
    password:String,
    role: { type: String, enum: ["admin","customer"], default:"customer"}


});

module.exports = mongoose.model("user", userSchema)


