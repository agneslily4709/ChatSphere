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

mongoose.connect(DB_URL,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
.then(()=> console.log("DB connected"))
.catch((error) => console.log("Error occured",error))
mongoose.set('strictQuery', true);
const server = app.listen(PORT,()=>console.log(`Port is running on PORT: ${PORT}`))

const socket = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});

const onlineUsers = new Map();

socket.on("connection", (socket) => {
    socket.on("add-user", (userId) => {
        if(userId){
            onlineUsers.set(userId, socket.id);
        }
    });

    socket.on("message-send", (data) => {
        const sendUserSocket = onlineUsers.get(data.to_id)
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("message-recieve",data)
        }
    });
});