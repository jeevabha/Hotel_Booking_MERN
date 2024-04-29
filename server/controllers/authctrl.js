const User =  require('../Models/authmodel')
var bcrypt = require('bcryptjs');


const register = ( async (req,res,next)=>{
    console.log('stage 1');
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

    const newuser = new User({
        name:req.body.name,
        email:req.body.email,
        password:hash,
})
console.log('stage 2');

    await newuser.save()
    res.status(200).json('User has created')
} catch (err) {
    next(err)
}
})


const login =  (async(req,res,next)=>{
//     console.log('stage 1');
//     const {email,password} =  req.body
//    try {
//     const user =  User.findOne({email:email}).then((user)=>{
//         bcrypt.compare(password,user.password ,  (err,response)=>{
//             if(err) return next(404,"password error")
//             if(response) res.json(user)
//         })
//     })
//     if(!user){
//      return next(404,"user not found")
//     }


//     const token =  jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
    
//     const {password,isAdmin,...otherDetails} =  user._doc;
//     res.cookie("access_token",token,{
//         httpOnly:true
//     }).status(200).json({...otherDetails})
//     console.log({...otherDetails});
    
    
//    } catch (err) {
//     next(err)
//    }
})


module.exports = {register,login}