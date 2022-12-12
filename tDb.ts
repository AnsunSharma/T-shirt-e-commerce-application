import mongoose,{connect} from "mongoose";
mongoose.set('strictQuery', true);
const mongoUri="mongodb://0.0.0.0:27017/T-shirt";

function connects() {
    mongoose.connect(mongoUri)
  .then(() => console.log(' mongodb connected'))
  .catch((error) => console.log(error.message));


}
export{
    connects
}