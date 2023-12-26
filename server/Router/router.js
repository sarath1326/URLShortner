



const express = require('express');
const router = express();
const control = require("../Control/control")
const JWT=require("jsonwebtoken");
const { OAuth2Client}= require("google-auth-library")
const dotenv=require('dotenv')
dotenv.config()




  const verify=async(req,res,next)=>{

    const token= req.cookies.urljwt

     if(!token){
         res.json({authfaild:true})
         return
     }

    const userdata=await JWT.verify(token,"sarath1937")

    if(!userdata){

           res.json({authfaild:true})
           return
           
    
        }else{

             next()


    }

     
  }

  




router.post("/sign", (req, res) => {

    control.email_exit(req.body).then((respo) => {

        if (respo.exit) {

            res.json({ exit: true });
            return;

        } else {

            control.signup(req.body).then(() => {

                res.json({ flag: true });
                return;


            }).catch(err => {

                res.json({ flag: false });
                return;

            });



        }



    });

});


router.post("/login",(req,res)=>{

    console.log(req.body) ;

    control.login(req.body).then((respo)=>{

         if(respo.flag){

            const {name,_id}=respo.data

         const token = JWT.sign({name:name,id:_id},"sarath1937");

         res.cookie("urljwt", token, {

          maxAge: 360000,
          sameSite:"none",
          secure:true,
          httpOnly:true
            
           
         });

         res.json({flag:true});
         return;
        
        }else if(respo.nouser){
         
              res.json({nouser:true});
              return;
              
         }else{

              res.json({flag:false});
              return;
         }

          
       });


      
})



router.get("/getuserdata",async(req,res)=>{

   const token= req.cookies.urljwt

   

   if(!token){
     
         res.json({flag:false})
         return
   }

  
     const userdata= await JWT.verify(token,"sarath1937")

     if(userdata){

            res.json({flag:true,data:userdata})
     }else{

        res.json({flag:false})
     }


})



router.post("/createurl",verify,async(req,res)=>{

    const token= req.cookies.urljwt

    const userData= await JWT.verify(token,"sarath1937")

    const data={

          url:req.body.url,
          short:req.body.short,
         user:userData.id
    }

    console.log(data)

    control.createurl(data).then((respo)=>{

        res.json({flag:true,data:respo})
        return

       }).catch(err=>{

         res.json({flag:false})
          
       

    })

})

router.get("/redirect",(req,res)=>{

     const short=req.query.short
     
     console.log(short)
      

   control.redirectfun(short).then((respo)=>{

          if(respo.flag){

            const url=respo.data

           res.redirect(`${url.url}`)
            
               
               console.log(url.url)

          }else{

            console.log("not url s")
            


          }
        
        }).catch(err=>{

              console.log("errr")
        })
    


    })

    router.get("/saveurl",verify,async(req,res)=>{

      const token= req.cookies.urljwt

       const userdata=await JWT.verify(token,"sarath1937")

       const {id}=userdata

         control.user_save(id).then((respo)=>{

                 res.json({flag:true,data:respo})
        
                
                }).catch(err=>{

                  
                  res.json({flag:false})

         })

         
    })


    router.post("/save_delete",(req,res)=>{

      const {id}=req.body

        control.save_delete(id).then(()=>{

              res.json({flag:true})
        
            }).catch(err=>{

              res.json({flag:false})


        })
    
         
    })



    router.post("/",async(req,res)=>{

      res.header('Acess-Control-Allow-Origin','http://localhost:5173')
      res.header('Referrer-Policy','no-referrer-when-downgrade')


        const redirecturl='http://127.0.0.1:3000/oauth'

        const oAuth2Client=new OAuth2Client(

         process.env.CLIENT_ID,
         process.env.CLIENT_SECRET,
         redirecturl
         
         )

         const authorizeurl=oAuth2Client.generateAuthUrl({

           access_type:'offline',
           scope:'https://www.googleapis.com/auth/userinfo.profile openid',
           prompt:'consent'
         })

    res.json({url:authorizeurl})


    })






    








module.exports = router;
