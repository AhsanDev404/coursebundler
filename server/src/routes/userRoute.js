import express from 'express'
import { changePassword, changeProfile, getMyProfile, login, logout, register } from '../controllers/userController.js'
import { isAuthenticate } from '../middlewares/auth.js'


const userRoute = express.Router()

userRoute.route('/register').post(register)

userRoute.route('/login').post(login)

userRoute.route('/logout').get(logout)

userRoute.route('/me').get(isAuthenticate,getMyProfile)

userRoute.route('/password/change').put(isAuthenticate , changePassword)

userRoute.route('/me/update').put(isAuthenticate , changeProfile)

export default userRoute 