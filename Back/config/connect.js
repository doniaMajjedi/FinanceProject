const mongo=require("mongoose");
mongo.connect('mongodb+srv://majjedidonia21:NGOUfXdF4uEWgUlX@dons.nruyfvl.mongodb.net/')
.then(()=>console.log("connected to the database"))
.catch((err)=> console.log(err));

module.exports=mongo;