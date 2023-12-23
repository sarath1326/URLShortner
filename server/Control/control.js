

const Model = require("../Model/Schema");
const bcrypt = require("bcrypt");




module.exports = {


    email_exit: (data) => {

        return new Promise(async (resolve, reject) => {

            try {

                const result = await Model.userModel.findOne({ email: data.email });

                if (result) {

                    resolve({ exit: true });
                } else {

                    resolve({ exit: false });
                }

            } catch (error) {

                reject();


            }
        });


    },


    signup: (data) => {

        return new Promise(async (resolve, reject) => {

            try {

                data.password = await bcrypt.hash(data.password, 10);

                const final = new Model.userModel(data);

                final.save().then(() => {

                    resolve();

                }).catch(err => {

                    reject();
                })

            } catch (error) {

                reject();

            }



        });



    },

    login: (data) => {

        return new Promise(async (resolve, reject) => {

            try {


                const user = await Model.userModel.findOne({ email: data.email });

                if (user) {

                    const respo = await bcrypt.compare(data.password, user.password)

                    if (respo) {

                        resolve({ flag: true, data: user });
                        console.log("fin")

                    } else {

                        resolve({ flag: false });

                    }

                } else {

                    resolve({ nouser: true });
                }
            } catch (error) {

                reject();

                console.log(error)

            }
        });


    },

    createurl: (data) => {

        return new Promise((resolve, reject) => {

            try {

                const saveData = {

                    url: data.url,
                    short: data.short,
                    user: data.user
                }


                const final = new Model.urlcreateModel(saveData);
                final.save().then((respo) => {

                    resolve(respo)


                }).catch(err => {

                    reject()
                })

            } catch (error) {

                reject()

            }





        })


    },

    redirectfun:(data)=>{

          return new Promise(async(resolve,reject)=>{

               try {

                const result=await Model.urlcreateModel.findOne({short:data});

                if(result){

                      resolve({flag:true,data:result})
               
                    }else{

                     
                        resolve({flag:false})
               
             
               }
            
            } catch (error) {

                reject()
                
               }
          })

    },

    user_save:(id)=>{

        return new Promise(async(resolve,reject)=>{

               try {

                const res=await Model.urlcreateModel.find({user:id})

                resolve(res)

                } catch (error) {
                    
                    reject()
                
               }
        })

        

          
    },

    save_delete:(id)=>{

        return new Promise(async(resolve,reject)=>{

            try {

                Model.urlcreateModel.deleteOne({_id:id}).then(()=>{

                     resolve()
               
                    }).catch(err=>{

                        reject()

                })
             } catch (error) {

                reject()
                
            }

               
        })
         
    }

    

    





}