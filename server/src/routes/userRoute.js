import express from 'express'
import { login, logout, register } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.route('/register').post(register)

userRoute.route('/login').post(login)
userRoute.route('/logout').get(logout)

export default userRoute 