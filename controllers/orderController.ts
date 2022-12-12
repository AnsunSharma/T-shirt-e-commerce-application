import { Request,Response } from "express";
import TshirtModel from "../models/T-shirtShema";
import orderModel from "../models/orderSchema";
import UserModel from "../models/userSchema";
import { updateById } from "./tShirtController";
import { ObjectId } from "mongodb";
export const tshirtAddInorder=async(req:Request,res:Response)=>{
    try {
        const order=await orderModel.create(req.body)
        
        console.log(order.orderId);
        let r1:any=await TshirtModel.find({_id:order.orderId})
        console.log(r1);
        let r2:any=r1[0].stock-1
        await TshirtModel.updateOne({_id:order.orderId},{stock:r2})
        console.log(r2);
        
        res.status(201).json({
            success:true,
            order
        
        })
        
    } catch (error) {
       console.log(error);
       
    }
}
export const adminReadData=async(req:Request,res:Response)=>{
   
  
    try {
          //let result2=await orderModel.find();
        //   const data=await orderModel.aggregate([{
        //     '$lookup':{
        //         'from':'UserModel'
        //     }
        //   }])
        const data = await UserModel.aggregate([
            
                {
                  '$match': {
                    '_id': new ObjectId('639722c2617050001a578766')
                  }
                }, {
                  '$lookup': {
                    'from': 'ordermodels', 
                    'let': {
                      'id': {
                        '$toString': '$_id'
                      }
                    }, 
                    'pipeline': [
                      {
                        '$match': {
                          '$expr': [
                            '$userId', '$$id'
                          ]
                        }
                      }
                    ], 
                    'as': 'result'
                  }
                }
              
          ])
          console.log(data);
          
         res.json(data)
    } catch (error) {
        console.log(error);
        
    }
 }
 export const userReadDataOrder=async(req:Request,res:Response)=>{
   
 let orderid=req.params.orderId


    try {
          let result2=await orderModel.find({'orderId':orderid});
          console.log(result2);
          
        res.json(result2)
    } catch (error) {
        console.log(error);
        
    }
 }
 export const userReadDataOrderStatus=async(req:Request,res:Response)=>{
   
    let id=req.params.id
    const payload =req?.body;
       try {
             let result2=await orderModel.find({'_id':new ObjectId(id)},payload);
             console.log(result2);
             
           res.json(result2)
       } catch (error) {
           console.log(error);
           
       }
    }
    export const updateBystatus=async(req:Request,res:Response)=>{

        try {
            let id=req.params.id
            let result=await orderModel.updateOne({'_id':new ObjectId(id)},{$set:{
                status:req.body.status
            }}) 
            res.send(result)
        } catch (error) {
            console.log(error);
            
        }
        
    } 