

export const agecheck=(req,res,next)=>{
console.log(`middle wares`);
if(req.body.age>18){
    next()
}else{
    res.json({ages:"age is not valid"})
}
}