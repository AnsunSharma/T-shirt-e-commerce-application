import express,{Request,Response} from "express";
import { routerPath } from "./routes/router";
import{connects}from "./tDb";
const app =express();
const PORT=4000
connects()
app.use(express.json());

 app.use('/',routerPath)



app.listen(PORT,()=>{
    console.log("port is running in",PORT);
    
})