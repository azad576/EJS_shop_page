import express from 'express'
import { staffcreate } from '../controlers/staff.js'
import { cratestaffphoto } from '../utility/multer.js'

const router=express.Router()

router.post('/staff',cratestaffphoto,staffcreate)
export default router