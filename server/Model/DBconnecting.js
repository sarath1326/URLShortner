

const mongoose=require("mongoose");



const DBconnecting=()=>{

      mongoose.connect("mongodb+srv://sarathsarath93366:sarath1937@cluster0.pcfew5m.mongodb.net/?retryWrites=true&w=majority").then(()=>{


               console.log("DB connected");
      
            }).catch(err=>{

           console.log("DB connecting faild");
      });

}

module.exports=DBconnecting ;