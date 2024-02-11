const expsenseModel = require('../models/expense');

const createExpenseData = async (req,res,next) => {
    try{
        
        const {propertyid,purposeid,amount,d_o_p} = req.body

        const existingData = await expsenseModel.find({purposeid : purposeid })
        if(existingData && existingData.length > 0){
            return res.status(400).json({ message : `Dupicate Purpose for this Property`,status:false})
        }
        const data = {
            propertyid,
            purposeid,
            amount,
            d_o_p : new Date(d_o_p).toISOString(),
            expenseAttachment : req?.file?.expenseAttachment?.path?.replace(/\\/g, "/")
        }

        const expsenseData = await expsenseModel.create(data);

        res.status(201).json({
            message : "Expsense created Successfully",
            status:true,
            data : expsenseData
        })

    }catch(err){
        res.status(500).json({
            message : "Expsense not created",
            status:false
        }) 
    }
}
    
const getallExpsenses = async (req,res,next) => {
    try{
        const getAllExpense = await expsenseModel.find({softdelete : false });

        res.status(200).json({
            total : getAllExpense.length ,
            message : "Expense fetched successfully",
            status : true,
            data : getAllExpense
        })

    }catch(err){
        res.status(500).json({
            message : "Expense not fetched successfully",
            status : false
        })
    }
}
    
const getByidExpense = async (req,res,next) => {
    const id = req.params.id
    try{
        const getExpense = await expsenseModel.findOne({ _id : id});

        res.status(200).json({
            message : "Expense fetched successfully",
            status : true,
            data : getExpense
        })
    }catch(err){
        res.status(500).json({
            message : "Expense not fetched successfully",
            status : false
        })
    }
}

   
const updateExpenseRecord = async (req,res,next) => {
    const id = req.params.id
    try{
        const {propertyid,purposeid,amount,d_o_p} = req.body
        const updateExpesne = await expsenseModel.findByIdAndUpdate(
            {_id : id},
            {$set : {
                propertyid : propertyid,
                purposeid : purposeid,
                amount : amount,
                d_o_p : new Date(d_o_p).toISOString(),
                expenseAttachment : req?.file?.expenseAttachment?.path?.replace(/\\/g, "/")
             }
            },
            {new : true}
        )

        res.status(201).json({
            message : "Expense updated",
            status: true,
            data : updateExpesne
        })
    }catch(err){
        res.status(500).json({
            message : "Expense not updated",
            status: false
        })
    }
}


const deleteExpenseRecord = async (req,res,next) => {
    const id = req.params.id
    try{
         await expsenseModel.updateOne({_id : id},{$set : {softdelete : true}},{new : true})
        res.status(200).json({
            message : "Expense Deleted Successfully",
            status : true
        })
    }catch(err){
        res.status(200).json({
            message : "Expense not Deleted Successfully",
            status : false
        })
    }
}







module.exports = {
    createExpenseData,
    getallExpsenses,
    getByidExpense,
    updateExpenseRecord,
    deleteExpenseRecord
}