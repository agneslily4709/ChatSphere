import express from "express"
import {createUser,getAllUser,hello, loginUser,getAllMessages, postMessages} from "../Controller/Controller.js"

const router = express.Router()

router.post("/register",createUser)
router.get("/hello",hello)
router.post("/login",loginUser)
router.get("/",getAllUser)
router.post("/sendMsg",postMessages)
router.get("/:id",getAllMessages)

export default router