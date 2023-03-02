import express from 'express'
import { getAllCourse } from '../controllers/courseController.js'

const courseRoute = express.Router()

courseRoute.route('/course').get(getAllCourse)

export default courseRoute  