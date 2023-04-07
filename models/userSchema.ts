import {Schema,model,Document} from "mongoose";
interface user{
    userName:String,
    role:String,
   
    
}
   


//t-shirt details like name, type, avialable-size, price, avialable-till, stock.
const UserSchema=new Schema<user>({
   userName:{
    type:String
   },
   role:{
    type:String
   }
     
})
const UserModel=model<user>('userModel',UserSchema)

export default UserModel