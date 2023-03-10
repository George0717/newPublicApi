import  express from "express";
import { getUsers, getFoodById, saveUser, UpdateFood, DeleteFood } from "../controller/UserController.js";

const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getFoodById)
router.post('/users', saveUser)
router.patch('/users/:id', UpdateFood)
router.delete('/users/:id', DeleteFood)
export default router