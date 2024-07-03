const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const dbConnection = require("./configuration/dbConfig");
const cors = require ("cors");
const createAdminAccount = require("./scripts/admin")
const loginRoute = require('./routes/login')

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());



dbConnection();
app.use("/user", signupRoute);
app.use("/auth",loginRoute);

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}`);
});


createAdminAccount();