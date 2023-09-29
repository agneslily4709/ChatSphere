import mongoose from "mongoose"

const userScheme = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String},
    password:{type:String,required:true},
    createdAt: {type: Date,default: new Date()},
    avatarImage:{type:String}
})
export const UserModel = mongoose.model("User",userScheme)

const messageSchema = mongoose.Schema({
    uniqueId:{type:String},
    messages:[{
        sender:{type:String},
        receiver:{type:String},
        text:{type:String},
        date: { type: Date, default: Date.now }, // Use Date.now to automatically generate the current date
        time: { type: String, default: function() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        }},
    }],
})
export const MsgModel = mongoose.model("Message",messageSchema)
