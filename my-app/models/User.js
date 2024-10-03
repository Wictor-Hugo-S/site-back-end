
 const mongoose=require('mongoose')

// const UserSchema=new mongoose.Schema({
//     useraname:{type:String,require:true,unique:true},
//     password:{type:String,required:true},
// })

// module.exports=mongoose.model('User',UserSchema)


const UserSchema=new mongoose.Schema({
    cpf:{
        type:String,
        required:true,
        unique:true
    },
    senha:{
        type:String,
        required:true
    }
})

const User=mongoose.model('User',UserSchema)

module.exports = User;