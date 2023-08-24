import mongoose from "mongoose"
import bcrypt from "bcrypt"
import UserModel from "../Model/Model.js"

export const createUser = async(req,res) => {
    const {username,email,password,avatarImage} = req.body
    try {
        const checkUsername = await UserModel.findOne({username})
        const checkEmail = await UserModel.findOne({email})
        if(checkEmail){res.json({message:"Email already exist"})}
        if(checkUsername){res.json({message:"Username already exist"})}
            let hashedPassword = await bcrypt.hash(password,10)
            const newUser = new UserModel({username:username,email:email,password:hashedPassword,avatarImage:avatarImage})
            await newUser.save()
            res.status(200).json(newUser)
    } catch (error) {
        res.status(404).json({message:error})
    }
}
export const loginUser = async(req,res) => {
    const {username,password} = req.body
    try {
        const user = await UserModel.findOne({username})
        if(!user){res.status(404).json({message:"Incorrect Username"})}
        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid){res.status(200).json({message:"Incorrect password"})}
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message:error})
    }

}

export const getAllUser = async(req,res) => {
    try {
        const allUsers = await UserModel.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const hello = (req,res)=>{
    res.send("hello from backend")
}