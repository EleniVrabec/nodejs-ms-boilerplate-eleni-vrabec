/* import {
    access,
     mkdir,
     writeFile,
     readFile
    } from "node:fs/promises"; */
    import createPost from "./post";
    import createGet from "./get";
    import confiq from "../../confiq";
    //import { logger } from "../../initializers/express/libs/logger";
    import { logger } from "../../initializers/express/libs/logger";
    import { makeInputObj, makeOutputObj } from "../entities";
    import { insertDocument, findDocuments } from '../data-access';
    import { insertOneDocument } from '../../initializers/express/libs/mongoDb';
    import {
        checkDir,
        writeToFile,
        readFromFile
    }from "../data-access"
    
    const dbConfig = confiq.DB_CONFIG;
    
    const fileDirName = confiq.FILE_FOLDER_NAME;
    const fileDirPath = confiq.FILE_FOLDER_PATH;
    const filename = confiq.FILE_DB_NAME;
    const filePath = confiq.FILE_DB_PATH;
    const errorMsgs = confiq.ERROR_MSG.post;
    
    const post = ({ params }) =>
  createPost({
    makeInputObj,
    insertDocument,
    findDocuments,
    get,
    logger
  }).post({
    params,
    dbConfig: confiq.DB_CONFIG,
    errorMsgs: errorMsgs
  });
    
    
    const get = ({ params }) =>
     createGet({
        makeInputObj,
        findDocuments,
        makeOutputObj,
        logger
      }).get({
        params,
        dbConfig,
        errorMsgs
      })
    
    
    export{
        post,
         get  
    }