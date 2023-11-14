

  
  const mongoose=require("mongoose");

  const userShema= new mongoose.Schema({

          name:String,
          email:{
             
              type:String,
              unique:true
          },

          password:String
        
        
        });


       const userModel=mongoose.model("user",userShema);


       
       const urlcreateSchema= new mongoose.Schema({

             url:String,
             short:String,
             user:String
       
       
            })


          const urlcreateModel=mongoose.model("urlcreate",urlcreateSchema)








       module.exports={

            userModel,
            urlcreateModel
       }

