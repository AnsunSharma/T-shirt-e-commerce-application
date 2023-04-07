import {Schema,model,Document} from "mongoose";
interface dashbord{
    end_year:String,
    cityLng:String,
    cityLat:String,
    intensity:String,
    sector:String,
    topic:String,
    swot:String,
    url:String,
    region:String,
    start_year:String,
    impact:String,
    added:String,
    published:String,
    city:String,
    country:String,
    elevance:String,
    pestle:String,
    source:String,
    title:String,
    likelihood:String
}
   


//t-shirt details like name, type, avialable-size, price, avialable-till, stock.
const dashbordSchema=new Schema<dashbord>({
    end_year:{
        type:String
    },
    cityLng:{

        type:String
    },
    cityLat:{
        type:String
    },
    intensity:{type:String},
    sector:{type:String},
    topic:{type:String},
    swot:{type:String},
    url:{type:String},
    region:{type:String},
    start_year:{type:String},
    impact:{type:String},
    added:{type:String},
    published:{type:String},
    city:{type:String},
    country:{type:String},
    elevance:{type:String},
    pestle:{type:String},
    source:{type:String},
    title:{type:String},
    likelihood:{type:String}
    


     
})
// export var aggregateWithAwait = async function (model: any, aggregate: any) {
//     try {
//       let resp: any = await dashbordModel.aggregate(aggregate);
//       return resp;
//     } catch (error) {
//       // console.log("Catch aggregateWithAwait :: ", error);
  
//       return null;
//     }
//   };
const dashbordModel=model<dashbord>('dashbordModel',dashbordSchema)
export default dashbordModel