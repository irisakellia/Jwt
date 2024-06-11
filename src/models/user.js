const mongoose = require('mongoose');

const dbConnection = require('../configuration/dbConfig')


const userSchema = new mongoose.Schema({

    name: String,
    email:String,
    password:String,
    role: { type: String, enum: ["admin","customer"], default:"customer"}


});

dbConnection();

module.exports = mongoose.model("user", userSchema)
