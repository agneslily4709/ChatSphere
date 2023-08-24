import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import userRoutes from "./Routes/Routes.js"
import dotenv from "dotenv"
dotenv.config()

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors(
    {
        'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
    }
))
app.use(express.json())
app.use("/api/user",userRoutes)

mongoose.connect(DB_URL)
.then(app.listen(PORT, () => console.log(`Port is running on PORT: ${PORT}`)))
.then(()=> console.log("DB connected"))
.catch((error) => console.log("Error occured",error))
