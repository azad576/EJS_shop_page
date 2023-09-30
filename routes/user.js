import express from 'express'
import { crateuserphoto } from '../utility/multer.js'
import { userphot } from '../controlers/user.js'

const router=express.Router()

router.post('/users',crateuserphoto,userphot)
export default router