const mongoose=require("mongoose");
const TeamSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    BattingStyle:{
        type:String,
        required:true
    },
    Centuries:{
        type:String,
        required:true
    },
    Fifties:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('CricketTeam',TeamSchema,'cricketteam');