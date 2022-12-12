import express,{Request,Response} from "express";
import { tshirtAdd,updateById,readDataByid,deleteById,readData } from "../controllers/tShirtController";
import { checkUser,checkUser1 } from "../middlewere/adminMiddlewere";
import { userAdd,userReadData } from "../controllers/userControllers";
import { tshirtAddInorder,adminReadData,userReadDataOrder,userReadDataOrderStatus,updateBystatus } from "../controllers/orderController";
const routerPath= express.Router();
routerPath.post('/addTshirt',checkUser,tshirtAdd)
routerPath.put('/updateTshirt/:id',checkUser,updateById)
routerPath.get('/readDataApi',checkUser,readData)
routerPath.get('/readDataApi/:id',checkUser,readDataByid)
routerPath.delete('/deleteByid/:id',checkUser,deleteById)
routerPath.post('/userAddApi',userAdd)
routerPath.get('/userReadDataApi',checkUser1,userReadData)
routerPath.post('/tshirtAddInorderApi',checkUser1,tshirtAddInorder)
routerPath.get('/adminReadDataApi',checkUser,adminReadData)
routerPath.get('/userReadDataOrderApi/:orderId',checkUser1,userReadDataOrder)
routerPath.get('/userReadDataOrderStatusApi/:id',checkUser1,userReadDataOrderStatus)
routerPath.put('/updateBystatusApi/:id',checkUser,updateBystatus)
export{
    routerPath
}