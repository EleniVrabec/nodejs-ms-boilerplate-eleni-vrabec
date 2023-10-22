import {logger} from "../../initializers/express/libs/logger";
import { post } from "../use-cases";
import  { get } from "../use-cases"

const baseUrl = "/api/v1";

//const get = (req, res) => res.json({data: "Hello world"});
 const getEP = async (req, res) => {
    try {
      let results = await get({ params: req.params });
      res.json({ err: 0, data: results });
    } catch (err) {
      logger.info(`[EP][GET] ${req.method }: ${err.message}`)
      res.status(403)
      res.json({err: 1, data: { err }})
     }
  } 
const postEP = async (req, res) => {
    try{
        let results = await post({params:req.body })
        res.json({data: results})
    }catch(err){
        logger.error(`[EP][POST] ${req.method }: ${err.message}`)
    res.status(403)
    res.json({ err: 1, data: err.message })
    }
}

   

const routes = [
    {path: `${baseUrl}/`, method: "get", component: getEP}, 
    {path: `${baseUrl}/`, method: "post", component: postEP}, 

]

export{ routes }