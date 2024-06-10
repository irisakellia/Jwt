const express = require('express');
const signupRoute = require('./routes/signup');
const bodyparser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5001 ;

app.use("/user", signupRoute)

app.listen(PORT , () => {
    console.log(`server is running on : http://localhost:${PORT}`)
})
