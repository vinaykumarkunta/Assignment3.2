const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/TeamIndia").then(()=>{
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e);
    console.log("Unsuccessful connection")
})