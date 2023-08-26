import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./Routes/Routes.js"

import {Server, Socket} from 'socket.io'
import dotenv from "dotenv"
dotenv.config()

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/user",userRoutes)
const server = app.listen(PORT)
mongoose.connect(DB_URL)
.then(() => console.log(`Port is running on PORT: ${PORT}`))
.then(()=> console.log("DB connected"))
.catch((error) => console.log("Error occured",error))

const socket = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});

const onlineUsers = new Map();

socket.on("connection", (socket) => {
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });
    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to)
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-recieve",data.msg)
        }
    });
});