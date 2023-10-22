import {
    access,
     mkdir,
     writeFile,
     readFile
    } from "node:fs/promises";
import createPost from "./post";
import createGet from "./get";
import confiq from "../../confiq";
//import { logger } from "../../initializers/express/libs/logger";
import { logger } from "../../initializers/express/libs/logger";
import { makeInputObj } from "../entities";
import {
    checkDir,
    writeToFile,
    readFromFile
}from "../data-access"


const fileDirName = confiq.FILE_FOLDER_NAME;
const fileDirPath = confiq.FILE_FOLDER_PATH;
const filename = confiq.FILE_DB_NAME;
const filePath = confiq.FILE_DB_PATH;
const errorMsgs = confiq.ERROR_MSG.post;

const post =  ({params}) => 
createPost({
    makeInputObj,
    checkDir,
    writeToFile,
    readFromFile,
    logger,
    
    
    })
.post({
    params,
    filename, 
    fileDirPath, 
    fileDirName, 
    filePath, 
    errorMsgs
});

 const get =  ({params}) => 
createGet({
    access,
    readFile,
    logger,
    
    
}).get({params, filePath, filename})  

export{
    post,
     get  
}