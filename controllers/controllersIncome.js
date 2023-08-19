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
    const { amount, date, name,  } = req.body.data
    let income
    let error = null

    try {
        income = await new Incomes({
         amount:amount,
         date:date,
         name:name,
         
        }).save()
    }
    catch
    (err) { error = err }

    res.json({
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
    addMultiplesIncomes: async (req, res) => {
        let error = []
        let incomes = []
        for (let income of req.body.data) {
        try {
                let verifyIncome = await Incomes.find({ name: { $regex: income.name, $options: "i" } })
                if (verifyIncome.length == 0) {
                    let dataIncome = {
                        income: income.amount,
                        amount: income.amount,
                        date: income.date,
                        name: income.name,
                        
                    }
                    await new Incomes({
                        ...dataIncome
                    }).save()
                    incomes.push(dataIncome)
                } else {
                    error.push({
                        name: income.name,
                        result: "Ya existe en la base de datos con el Id: " + verifyIncome[0]._id
                    })
                }

            }
         catch (err) { error.push({name: income.name, err})}
        }
        res.json({
            response: error.length > 0 && incomes.length === 0 ? "Error" : incomes,
            success: error.length > 0 ? (incomes.length > 0 ? "Warning" : false) : true,
            error: error
        })

    },


}
       

    module.exports = incomesControllers 
    
