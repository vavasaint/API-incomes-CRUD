const mongoose=require("mongoose")

const incomeSchema= new mongoose.Schema({
    id:{type:String, required:true},
    amount: {type:String, required:true},
    date: {type:Date, required:true},
    name:{type:String, required:true},
    categoriesincomes:[{type:mongoose.Schema.Types.ObjectId, ref:"categoriesincomes"}]
    
})


const categoriesIncomeSchema= new mongoose.Schema({
    _id:{type:mongoose.Types.ObjectId},
    
    title: {type:String, required:true},
    
})

const categoriesincomes = mongoose.model("categoriesincomes",categoriesIncomeSchema)
const incomes = mongoose.model("incomes",incomeSchema)

module.exports= incomes