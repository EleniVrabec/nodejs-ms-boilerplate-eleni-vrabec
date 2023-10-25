import {
    access, 
    mkdir, 
    readFile, 
    writeFile
} from "node:fs/promises";
import confiq from "../../confiq";
import { logger } from "../../initializers/express/libs/logger";
import makeCheckDir from "./check-dir";
import makeWriteToFile from "./write-to-file";
import makeReadFromFile from "./read-from-file";

import {
    insertOneDocument,
    updateDocument as makeUpdateDocument,
    findDocuments as makeFindDocuments 
  } from '../../initializers/express/libs/mongoDb';
  
  const insertDocument = ({ document, dbConfig }) => insertOneDocument({ document, ...dbConfig });
  
  const updateDocument = ({ query, values, dbConfig }) => makeUpdateDocument({ query, values, ...dbConfig });
  
  const findDocuments = ({ query, dbConfig }) => makeFindDocuments({ query, ...dbConfig });
  
  export {
    findDocuments,
    insertDocument,
    updateDocument
  }

const checkDir = ({fileDirPath, fileDirName}) => 
makeCheckDir({access, mkdir, logger})
.checkDir({fileDirPath, fileDirName});

const writeToFile = ({content, filePath, filename}) => 

    makeWriteToFile({writeFile, logger})
    .writeToFile({content, filePath, filename});

const readFromFile = ({filePath, filename}) =>
    makeReadFromFile({readFile, logger})
    .readFromFile({filePath, filename});

    export{
        checkDir,
        writeToFile,
        readFromFile
    }
