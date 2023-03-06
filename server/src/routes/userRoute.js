import express from 'express'
import { getMyProfile, login, logout, register } from '../controllers/userController.js'
import { isAuthenticate } from '../middlewares/auth.js'

const userRoute = express.Router()

userRoute.route('/register').post(register)

userRoute.route('/login').post(login)

userRoute.route('/logout').get(logout)

userRoute.route('/me').get(isAuthenticate,getMyProfile)

export default userRoute 