import { Request,Response } from "express";
import TshirtModel from "../models/T-shirtShema";
import UserModel from "../models/userSchema";
import { ObjectId } from "mongodb";

//Admin should be able to add t-shirt details like name, type, avialable-size, price, avialable-till, stock.
export const tshirtAdd=async(req:Request,res:Response)=>{
     try {
        let result =await TshirtModel.collection.insertMany(req.body);
        res.send(result)
     } catch (error) {
        console.log(error);
        
     }
}
export const updateById=async(req:Request,res:Response)=>{

    
    try {
         let product=await TshirtModel.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success:false,
            massege:"product no found"
        })
    }
    product=await TshirtModel.findByIdAndUpdate(req.params.id,req.body,{new:true,useFindAndModify:false,runValidators:true})
    res.status(200).json({
        success:true,
        product
    })
    console.log(product);
    } catch (error) {
        console.log(error);
        
    }
} 

export const readData=async(req:Request,res:Response)=>{
    const payload =req?.body;
   
    try {
          let result2=await TshirtModel.find();
       
        res.json({result2:result2})
    } catch (error) {
        console.log(error);
        
    }
}

export const readDataByid=async(req:Request,res:Response)=>{
    const payload =req?.body;
    const id=req.params.id
    console.log(id);
    try {
          let result2=await TshirtModel.findById(id);
       
        res.json({result2:result2})
    } catch (error) {
        
    }
}
 
export const deleteById=async(req:Request,res:Response)=>{
    try {
        const product=await TshirtModel.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success:false,
            massege:"product no found"
        })
    }
    await product.remove();
    res.status(200).json({
        success:true  
    })
    } catch (error) {
        console.log(error);
        
    }
}