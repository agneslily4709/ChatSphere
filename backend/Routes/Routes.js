import express from "express"
import {createUser,getAllUser,hello, loginUser} from "../Controller/Controller.js"

const router = express.Router()
router.post("/register",createUser)
router.get("/hello",hello)
router.post("/login",loginUser)
router.get("/",getAllUser)

export default router