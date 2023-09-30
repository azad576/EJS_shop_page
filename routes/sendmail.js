import express from 'express'
import { register } from '../controlers/sendmail.js'

const router=express.Router()

router.post('/registers',register)

export default router