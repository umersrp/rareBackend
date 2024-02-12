const expsenseModel = require('../models/expense');
const mongoose = require('mongoose')
const createExpenseData = async (req,res,next) => {
    try{
        
        const {propertyid,purposeid,amount,d_o_p} = req.body
       
       
        const existingData = await expsenseModel.find({purposeid : purposeid })
        if(existingData && existingData.length > 0){
            return res.status(400).json({ message : `Dupicate Purpose for this Property`,status:false})
        }
        const attach = req.files.expenseAttachment[0].path.replace(/\\/g, "/")
        const data = {
            propertyid,
            purposeid,
            amount,
            d_o_p : d_o_p ? new Date(d_o_p).toISOString() : null,
            expenseAttachment : attach
        }

        const expsenseData = await expsenseModel.create(data);

        res.status(201).json({
            message : "Expsense created Successfully",
            status:true,
            data : expsenseData
        })

    }catch(err){
        console.log("www",err)
        res.status(500).json({
            message : "Expsense not created",
            status:false
        }) 
    }
}
    
const getallExpsenses = async (req,res,next) => {
    try{
        const data = [
            {
              '$match': {
                'softdelete': false
              }
            }, {
              '$lookup': {
                'from': 'addproperties', 
                'localField': 'propertyid', 
                'foreignField': '_id', 
                'as': 'propertyid'
              }
            }, {
              '$lookup': {
                'from': 'purposeschemas', 
                'localField': 'purposeid', 
                'foreignField': '_id', 
                'as': 'purposeid'
              }
            }, {
              '$unwind': {
                'path': '$purposeid', 
                'preserveNullAndEmptyArrays': true
              }
            }, {
              '$unwind': {
                'path': '$propertyid', 
                'preserveNullAndEmptyArrays': true
              }
            },  {
              '$project': {
                '_id': 1, 
                'amount': 1, 
                'd_o_p': 1, 
                'expenseAttachment': 1, 
                'softdelete': 1, 
                'createdAt': 1, 
                'purpose': '$purposeid.name', 
                'propertyid': 1, 
                'propertyDetails': 1
              }
            }, {
              '$sort': {
                'createdAt': -1
              }
            }
          ]
        const getAllExpense = await expsenseModel.aggregate(data)

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
      const data = [
        {
          '$match': {
            '_id' : mongoose.Types.ObjectId(id),
            'softdelete': false
          }
        }, {
          '$lookup': {
            'from': 'addproperties', 
            'localField': 'propertyid', 
            'foreignField': '_id', 
            'as': 'propertyid'
          }
        }, {
          '$lookup': {
            'from': 'purposeschemas', 
            'localField': 'purposeid', 
            'foreignField': '_id', 
            'as': 'purposeid'
          }
        }, {
          '$unwind': {
            'path': '$purposeid', 
            'preserveNullAndEmptyArrays': true
          }
        }, {
          '$unwind': {
            'path': '$propertyid', 
            'preserveNullAndEmptyArrays': true
          }
        },  {
          '$project': {
            '_id': 1, 
            'amount': 1, 
            'd_o_p': 1, 
            'expenseAttachment': 1, 
            'softdelete': 1, 
            'createdAt': 1, 
            'purpose': '$purposeid.name', 
            'propertyid': 1, 
            'propertyDetails': 1
          }
        }, {
          '$sort': {
            'createdAt': -1
          }
        }
      ]
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
                d_o_p : d_o_p,
                expenseAttachment : req.files ? req.files.expenseAttachment?.map(data => data.path.replace(/\\/g, "/")).pop() : null
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
        console.log("wsx",err)
        res.status(500).json({
            message : "Expense not updated",
            status: false
        })
    }
}

const SoftdeleteExpenseRecord = async (req,res,next) => {
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

const deleteExpenseRecord = async (req,res,next) => {
    const id = req.params.id
    try{
       const checkDeletedId = await expsenseModel.find({ _id : id})
       if(checkDeletedId && checkDeletedId.length > 0){
        return res.status(404).json({ message : "Expense not found"})
       }
         await expsenseModel.deleteOne({_id : id})
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
    SoftdeleteExpenseRecord,
    deleteExpenseRecord
}