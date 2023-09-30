import express from 'express'
import { customer_phot } from '../controlers/customer.js'
import {cratecustomerphoto} from '../utility/multer.js'

const router=express.Router()

// router.post('/customer',cratecustomerphoto,customer_phot)


export default router
