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

    // addIncome: async (req, res) => {
    //     const {  amount, date, } = req.body.data
    //     let income
    //     let error = null

    //     try {
    //         income = await new Incomes({
    //          amount:amount,
    //          date: date,
    //         }).save()
    //     }
    //     catch
    //     (err) { error = err }

    //     res.json({
    //         response: error ? "Error" : income,
    //         success: error ? false : true,
    //         error: error
    //     })

    //},
    
    
 addIncome: async (req, res) => {
    const { amount, date, categoriesincomes } = req.body;

    
    const newIncome = new incomes({
        
        amount: parseFloat(amount), 
        date: new Date(date), 
        categoriesincomes: categoriesincomes 
    });

    try {
        
        const savedIncome = await newIncome.save();
        res.json({
            response: savedIncome,
            success: true,
            error: null
        });
    } catch (error) {
        console.error("Error:", error);
        res.json({
            response: null,
            success: false,
            error: "Error "
        });
    }
 },


    modifyIncome: async (req, res) => {
        const id = req.params.id;
        const income = req.body.data;
        let incomedb
        let error = null

        try {
            incomedb = await incomes.findOneAndUpdate({ _id: id }, income, { new: true })
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
    
