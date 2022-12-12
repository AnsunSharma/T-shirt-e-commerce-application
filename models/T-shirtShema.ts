import {Schema,model,Document} from "mongoose";
interface TshirtDetails{

    name:String,
    avialableSize:[String],
    price:Number,
    validaty:Date,
    stock:Number
}
   


//t-shirt details like name, type, avialable-size, price, avialable-till, stock.
const TshirtSchema=new Schema<TshirtDetails>({
    name:{
        type:String
    },
    avialableSize:{
        type:[String]
    },
    price:{
        type:Number
    },
    validaty:{
        type:Date,
        default:Date.now
    },
    stock:{
       type:Number
    }
     
})
const TshirtModel=model<TshirtDetails>('TshirtModel',TshirtSchema)
export default TshirtModel