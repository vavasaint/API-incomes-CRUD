const Router= require("express").Router()

const controllersIncome = require("../controllers/controllersIncome")
const {getIncomes,getOneIncome,removeIncome, modifyIncome, addIncome,addMultiplesIncomes} = controllersIncome  


Router.route("/incomes")
 .get(getIncomes)
 .post(addIncome)


 Router.route("/incomes/:id")
.get(getOneIncome)
.delete(removeIncome)
.put(modifyIncome)
 
 
// Router.route("/multiplesincomes")
// .post(addMultiplesIncomes)


module.exports = Router;