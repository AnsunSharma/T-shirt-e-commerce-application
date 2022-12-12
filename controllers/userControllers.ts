import { Request,Response } from "express";
import TshirtModel from "../models/T-shirtShema";
import UserModel from "../models/userSchema";
import { ObjectId } from "mongodb";

//Admin should be able to add t-shirt details like name, type, avialable-size, price, avialable-till, stock.
export const userAdd=async(req:Request,res:Response)=>{
     try {
        let result =await UserModel.collection.insertMany(req.body);
        res.send(result)
     } catch (error) {
        console.log(error);
        
     }
}
export const userReadData=async(req:Request,res:Response)=>{
   const payload =req?.body;
  
   try {
         let result2=await TshirtModel.find({},payload);
      
       res.json({result2:result2})
   } catch (error) {
       console.log(error);
       
   }
}
