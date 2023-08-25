const Incomes = require("../models/modelIncome")


const incomesControllers = {
    getIncomes: async (req, res) => {
        let incomes
        let error = null

        try {
            incomes = await Incomes.find().populate("categoriesincomes")
        }
        catch
        (err) { console.log(error = err)}


        res.json({
            response: error ? "Error" : { incomes },
            success: error ? false : true,
            error: error
        })
    },

    getOneIncome: async (req, res) => {
        const id = req.params.id
        let income
        let error = null

        try {
            income = await Incomes.findOne({ _id: id })
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { income },
            success: error ? false : true,
            error: error
        })
    },
    addIncome: async (req, res) => {
        console.log(req.body);
        // return 
        // const { amount, date, name,  } = req.body.data    
        const { amount, date, name, categoriesincomes } = req.body
        let income
        let error = null
    
        try {
            income = await new Incomes({ amount, date, name}).save()
        }
        catch
        (err) { error = err }
        
         return res.json({
            response: error ? "Error" : income,
            success: error ? false : true,
            error: error
        })
    
    },
 

    modifyIncome: async (req, res) => {
        const id = req.params.id;
        const income = req.body.data;
        let incomedb
        let error = null

        try {
            incomedb = await Incomes.findOneAndUpdate({ _id: id }, income, { new: true })
        }
        catch (err) { error = err }

        res.json({
            response: error ? "Error" : income,
            success: error ? false : true,
            error: error
        })
    },

    removeIncome: async (req, res) => {
        const id = req.params.id
        let income
        let error = null

        try {
            income = await Incomes.findOneAndDelete({ _id: id })
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { income },
            success: error ? false : true,
            error: error
        })
    },
}
       

    module.exports = incomesControllers 
    
