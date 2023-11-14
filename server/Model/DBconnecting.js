

const mongoose=require("mongoose");



const DBconnecting=()=>{

      mongoose.connect('mongodb://127.0.0.1:27017/URL').then(()=>{


               console.log("DB connected");
      }).catch(err=>{

           console.log("DB connecting faild");
      });

}

module.exports=DBconnecting ;