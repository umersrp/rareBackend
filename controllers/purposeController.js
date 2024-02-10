const Purposemodel = require('../models/purpose')

const createPurposeData = async(req,res,next) => {
try{

    const { name } = req.body

    if(!name){
        return res.status(404).json({ message : "Name is required"})
    }


    const data = {
        name : name
    }
   const purpose = await Purposemodel.create(data)
   
   res.status(201).json({
    message:"Data created successfully",
    status : true,
    data : purpose
   })



}catch(err){
    res.status(500).json({
message:"Data not created",
status : false
})

}


}

const getall = async(req,res,next) => {
try{
    const allRecord = await Purposemodel.find();

    res.status(200).json({
     message :  `${allRecord.length} records  fetched successfully`,
     status : true,
     data : allRecord
    })

}catch(err){

    res.status(200).json({
        message : " no records found",
        status : false
       })
    
}


}

const getByid = async(req,res,next) => {
    const {id} = req.params

    try{
        const oneRecord = await Purposemodel.findOne({ _id : id})
 
        res.status(200).json({
         message :  `records  fetched successfully`,
         status : true,
         data : oneRecord
        })

    }catch(err){
        res.status(200).json({
            message : " no records found",
            status : false
           })
        
    }


}

const updateRecord = async(req,res,next) => {
    const {id} = req.params
    const {name} = req.body
    try{
        const updateRecord = await Purposemodel.findByIdAndUpdate(
            {_id:id},
            {$set:{
                name :name,
            }},
            {new : true}
            
            
            )
            res.status(201).json({ message : 'Record updated' , data : updateRecord})

    }catch(err){
        res.status(500).json({ message : 'Record not updated'})

        
    }


}

const deleteRecord = async(req,res,next) => {
    const {id} = req.params
    try{

        await Purposemodel.deleteOne({_id : id})
        res.status(200).json({ message:'Record deleted'})

    }catch(err){
        res.status(200).json({ message:'Record not deleted'})

        
    }


}

module.exports ={
    createPurposeData,getall,getByid,updateRecord,deleteRecord
}