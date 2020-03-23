const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type: String,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
    },
    googleId:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

// UserSchema.pre('save', async function(next){
//     //this means we wanna do smthng before user are saved
//     const user = this
//     user.password = await bcrypt.hash(user.password,8);
//     next() 
// })


const User = mongoose.model('User',UserSchema);

module.exports = User;