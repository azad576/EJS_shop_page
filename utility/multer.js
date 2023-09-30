
import multer from "multer";

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{

        if(file.fieldname==='customer_photo'){
            cb(null,'public/cutomerphoto')
        }else if(file.fieldname==="staff_photo"){
            cb(null,'public/staff')
        }else if(file.fieldname==='student_photo'){
            cb(null,'public/student')
        }else if(file.fieldname==="user_photo"){
            cb(null,"public/user")
        }else if(file.fieldname==="uercv"){
            cb(null,'public/cv')
        }else if(file.fieldname==='product_photo'){
            cb(null,'public/productt')
        }
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

export const cratecustomerphoto=multer({storage:storage,fileFilter:(req,file,cb)=>{

    if(file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' || file.mimetype==='image/png'){

        cb(null,true)
    }else{
        cb( new Error('invalid file type pdf is not allow please choose photo'))
    }
}}).single('customer_photo')

export const crateproductphoto=multer({storage:storage}).single('product_photo')

export const cratestaffphoto=multer({storage:storage}).single('staff_photo')

export const cratestudentphoto=multer({storage:storage}).array('student_photo',5)

export const crateuserphoto=multer({storage:storage}).fields([

    {

        name:'user_photo',
        maxCount:1
    },
    {
        name:"uercv",
        maxCount:1
    }
])