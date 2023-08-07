const mongoose=require("mongoose")

const incomeSchema= new mongoose.Schema({
    id:{type:String, required:true},
    amount: {type:String, required:true},
    date: {type:String, required:true},
    
})

const incomes = mongoose.model("incomes",incomeSchema)

module.exports= incomes