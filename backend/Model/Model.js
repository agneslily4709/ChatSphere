import mongoose from "mongoose"

const userScheme = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String},
    password:{type:String,required:true},
    createdAt: {type: Date,default: new Date()},
    avatarImage:{type:String}
})
const UserModel = mongoose.model("User",userScheme)
export default UserModel