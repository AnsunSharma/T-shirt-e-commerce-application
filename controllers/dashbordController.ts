import { Request,Response } from "express";
import dashbordModel from "../models/dashBord";
import { ObjectId } from "mongodb";
export const BulkInsert=async(req:Request,res:Response)=>{
    try {
        const order=await dashbordModel.insertMany(req.body);
        
       
        res.status(201).json({
            success:true,
            order
        
        })
        
    } catch (error) {
       console.log(error);
       
    }
}

export const getFilterBulkInsert=async(req:Request,res:Response)=>{
    try {
    
       let searchTerm: any = req.query.searchTerm ? req.query.searchTerm : "";

      let aggr: any = [];
   
        if (searchTerm && searchTerm.length) {
       aggr.push({
          $match: {
            $or: [
            
              {
                end_year: {
                  $regex: searchTerm,
                  $options: "i",
                },
              },
              {
                intensity: {
                  $regex: searchTerm,
                  $options: "i",
                },
              },
              {
                sector: {
                  $regex: searchTerm,
                  $options: "i",
                },
              },
              {
                start_year: {
                  $regex: searchTerm,
                  $options: "i",
                },
              },
            ],
          },
       });
     }
        const order=await dashbordModel.aggregate(aggr);
        let count:any =order.length;
        
        res.status(201).json({
            success:true,
            order,
            count    
        })
        
    } catch (error) {
       console.log(error);
       
    }
}