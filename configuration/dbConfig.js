const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(
    "mongodb+srv://irisakellia:123@cluster0.jhv2iwc.mongodb.net/jwt_db?retryWrites=true&w=majority&appName=Cluster0"
  );
};
mongoose.connection.on("connected", () => {
  console.log("connected successfully to my db");
});

mongoose.connection.on("error", () => {
  console.error("failed to connect to the database");
});

module.exports = dbConnection;
