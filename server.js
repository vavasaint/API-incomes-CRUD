const express = require("express");
const cors = require("cors");
 require("dotenv").config()
require("./config/databaseIncome")
const app = express();

const Router= require('./route/routeIncome')
const PORT = process.env.PORT ||8000;

console.log(PORT)

app.use(cors())
app.set("port",PORT);

app.use(express.json())
app.use("/Api", Router)


app.listen(PORT,()=> {
    console.log("SERVIDOR CORRIENDO EN PUERTO "+ app.get("port"))
})

