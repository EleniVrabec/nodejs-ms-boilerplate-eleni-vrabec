require('dotenv').config();
import {rm} from "node:fs/promises";
import { readFile } from "node:fs/promises";

const expect = require('chai').expect;
import * as path from 'path';
import  config  from "../confiq";
import {makeInputObj} from "../../app/component/entities";
//import confiq from "../confiq";
import{
    checkDir,
    writeToFile,
    readFromFile
} from "../../app/component/data-access";
import createPost from "../../app/component/use-cases/post";

import { logger } from "../../app/initializers/express/libs/logger";

//const expect = require('chai').expect;
//import createPost from "../../app/component/use-cases/post";
/* const post = ({params}) => createPost({
    makeInputObj,
    checkDir,
    writeToFile,
    readFromFile,
    logger,
    
}).post({
    params,
    filename: config.FILE_DB_NAME,
    fileDirPath: config.FILE_FOLDER_PATH,
    fileDirName: config.FILE_FOLDER_NAME,
    filePath: config.FILE_DB_PATH,
    errorMsgs: config.ERROR_MSG.post
    
});
describe("Post", () => {
    after(()=> rm(config.FILE_FOLDER_PATH, { recursive: true }))

    it("should create a new user", async () => {
        const params={
            username: config.TEST_DATA.user1.username,
            password: config.TEST_DATA.user1.password
        }
        const results = await post({params});
        const fileContent = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' });
        //const fileContentString = fileContent.toString();
        const users = JSON.parse(fileContent);
        expect(results).to.have.property("username").equal(params.username);
        expect(users.length).to.equal(1);
        expect(users[0]).to.have.property("username").equal(params.username);
        });

        it("should not insert an epmty user", async () => {
            const params = {
                username: undefined,
                password: undefined
            } 
            try{
                let results = await post({params});
            }catch(err){
                expect(err.message).to.equal(`${ config.ERROR_MSG.post.MISSING_PARAMETER }username`);
            }
                  
       
        it("should not insert an existing user", async () => {// Create an initial user in the database
            const params = {
              username: config.TEST_DATA.user1.username,
              password: config.TEST_DATA.user1.password,
            };
            try{
                let results = await post({params});
            }catch(err){
                expect(err.message).to.equal(config.ERROR_MSG.post.EXISTING_USER);
            }




            it("should insert another user", async () => {
                const params = {
            username: config.TEST_DATA.user2.username,
            password: config.TEST_DATA.user2.password,
          } 
          await post({params});
          const results = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' })
          expect(Object.keys(JSON.parse(results)).length).to.equal(2)

          
        });
    })
});  */

const post = ({ params }) => 
  createPost({
    makeInputObj,
    checkDir,
    readFromFile,
    writeToFile,
    logger
  })
  .post({
    params,
    filename: config.FILE_DB_NAME,
    fileDirPath: config.FILE_FOLDER_PATH,
    fileDirName: config.FILE_FOLDER_NAME,
    filePath: config.FILE_DB_PATH,
    errorMsgs: config.ERROR_MSG.post
  });

describe('Post', () => {
  after(() => rm(config.FILE_FOLDER_PATH, { recursive: true }))

  it('should insert a user', async () => {
		const params = {
      username: config.TEST_DATA.user1.username,
      password: config.TEST_DATA.user1.password
    }
    const results = await post({ params });
    const fileContent = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' });
    const users = JSON.parse(fileContent)
    expect(results).to.have.property('username').equal(params.username);
    expect(users.length).to.equal(1);
    expect(users[0]).to.have.property('username').equal(params.username);
	});

  it('should not insert an empty user', async () => {
		const params = {
      username: undefined,
      password: undefined
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(`${config.ERROR_MSG.post.MISSING_PARAMETER}`);
    }
	});

  it('should not insert an existing user', async () => {
		const params = {
      username: config.TEST_DATA.user1.username,
      password: config.TEST_DATA.user1.password
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(config.ERROR_MSG.post.EXISTING_USER);
    }
	});

  it('should insert another user', async () => {
		const params = {
      username: config.TEST_DATA.user2.username,
      password: config.TEST_DATA.user2.password
    }
    await post({ params });
    const results = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' })
    expect(Object.keys(JSON.parse(results)).length).to.equal(2)
	});

    
 /*  it('should update user information', async () => {
        const params = {
          username: config.TEST_DATA.user1.username,
          password: 'newpassword123' // New password
        }
        await post({ params });
        const fileContent = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' });
        const users = JSON.parse(fileContent);
        expect(users.length).to.equal(2);
        expect(users[0].password).to.equal(params.password);
      });


  it('should handle special characters in usernames', async () => {
        const params = {
          username: 'user@123',
          password: 'password123'
        }
        const results = await post({ params });
        const fileContent = await readFile(config.FILE_DB_PATH, { encoding: 'utf8' });
        const users = JSON.parse(fileContent);
        expect(results).to.have.property('username').equal(params.username);
        expect(users.length).to.equal(2);
      }); */
    
})