const mongoose = require('mongoose');

const UsersScheme = new mongoose.Schema(
{
    name:{
        type: String
    },
    age:{
        type: Number
    },
    email:{
        type: String,
        unique:true
    },
    password:{
        type: String
    },
    role:{
        type: ["user", "admin"],
        default: "user"
    }

},
{
    timestamps: true, //created at y updatedate
    versionKey: false
}
)

module.exports = mongoose.model("users" , UsersScheme)