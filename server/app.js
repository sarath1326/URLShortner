
const express = require("express");
const app = express();
const cors = require("cors");
const DB = require("./Model/DBconnecting");
const router = require("./Router/router");
const bodyparser = require("body-parser");
const cookiesparser = require("cookie-parser");
const path=require("path")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

const _dirname=path.dirname("")

const buildpath=path.join(_dirname,"../client/build")
app.use(express.static(buildpath))


app.use(cors(


      {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "DELETE"],
       credentials: true,
          
      }


));

app.use(cookiesparser());





DB();


app.use("/", router);



















app.listen(3001, () => {


      console.log("servre started")

})

