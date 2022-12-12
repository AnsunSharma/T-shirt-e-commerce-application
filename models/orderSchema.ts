import {Schema,model,Document} from "mongoose";
interface order{
     orderId:String,
     userId:String,
     status:String,
     
   
}
   


//t-shirt details like name, type, avialable-size, price, avialable-till, stock.
const orderSchema=new Schema<order>({
    orderId:{
        type:String
    },
    userId:{

        type:String
    },
    status:{
        type:String
    }


     
})
const orderModel=model<order>('orderModel',orderSchema)
export default orderModel