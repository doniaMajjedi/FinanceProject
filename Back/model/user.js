const mongoose=require('mongoose');
//model ye5ou name de type string w schema
// best practice: Explicit Schema Definition
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
module.exports= mongoose.model('User', userschema)