const mongoose=require('mongoose');
const Etudiantschema=mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    lastName : {
        type: String,
        required: true
    },


    age: {
        type:Number,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
});

module.exports=mongoose.model('Etudiants',Etudiantschema)