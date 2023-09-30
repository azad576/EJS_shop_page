import express from 'express'
import { createphoto, getstudent } from '../controlers/studen.js'
import { agecheck } from '../middlewares/agecheck.js'
import { cratestudentphoto } from '../utility/multer.js'
const router=express.Router()

router.post('/student',agecheck,getstudent)

router.post('/students',cratestudentphoto,createphoto)
export default router