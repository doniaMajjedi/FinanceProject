const express = require("express");
const app = express();

const userapi=require('./routes/user');
require('./config/connect');


app.use('/user',userapi);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});