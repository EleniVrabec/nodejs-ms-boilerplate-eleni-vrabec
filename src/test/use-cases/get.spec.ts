import {
    access,
     mkdir,
     writeFile,
     readFile,
     rm  
    } from "node:fs/promises";
import  { readFromFile } from "../../app/component/data-access";
import  config  from "../confiq/";
import { after, before, describe } from "mocha";
import { logger } from "../../app/initializers/express/libs/logger";
import{expect} from "chai";
import createGet  from "../../app/component/use-cases/get";


    const get =  (params) => 
    createGet({
        access,
        readFile,
        logger 
    }).get({
        params, 
        filePath: config.FILE_DB_PATH,
        filename: config.FILE_DB_NAME
        })

     describe("get", () => {
        before(async () => {
            const usersObj = config.TEST_DATA
            const users = [usersObj.user1, usersObj.user2]
            await mkdir(config.FILE_FOLDER_PATH)
            await writeFile(config.FILE_DB_PATH, JSON.stringify(users))
        })
        
        after(async () => rm(config.FILE_FOLDER_PATH, { recursive: true }))
        it("should return a list of users", async()=>{
            const results = await get ({params: undefined})
            expect (results.length).to.equal(2)
        })
    })