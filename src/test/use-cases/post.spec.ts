require('dotenv').config();
import {rm} from "node:fs/promises";
import { readFile } from "node:fs/promises";
import{get} from "../../app/component/use-cases" 

import { findDocuments as dbFindDocuments, dropDb } from "../../app/initializers/express/libs/mongoDb"

const expect = require('chai').expect;
import * as path from 'path';

import {makeInputObj} from "../../app/component/entities";
//import confiq from "../confiq";
import{
    insertDocument,
    findDocuments
} from "../../app/component/data-access";
import createPost from "../../app/component/use-cases/post";

import { logger } from "../../app/initializers/express/libs/logger";
import confiq from "../confiq";


 const post = ({ params }) => 
  createPost({
    makeInputObj,
    insertDocument,
    findDocuments,
    get,
    logger
  })
  .post({
    params,
    dbConfig: confiq.DB_CONFIG,
    errorMsgs: confiq.ERROR_MSG.post
  }); 

 /*  const post = async ({ params }) => {
    try {
      const results = await createPost({
        makeInputObj,
        insertDocument,
        findDocuments,
        
        logger,
        dbConfig: confiq.DB_CONFIG,
        errorMsgs: confiq.ERROR_MSG.post
      }).post(params); // Pass the params here
  
      // Your expectations or assertions go here
    } catch (error) {
      // Handle any errors that may occur during the post operation
    }
  }; */
  

describe('Post', () => {
  after(async () => {
    await dropDb({ test: true, ...confiq.DB_CONFIG })
  })

  it('should insert a user', async () => {
		const params = {
      username: confiq.TEST_DATA.user1.username,
      password: confiq.TEST_DATA.user1.password,
      email: confiq.TEST_DATA.user1.email
    }
    const results = await post({ params });
    const query = { username: params.username, email: params.email }
    console.log(query)
    const dbContent = await dbFindDocuments({ query, ...confiq.DB_CONFIG });
    expect(dbContent[0]).to.have.property('username').equal(params.username);
    expect(dbContent.length).to.equal(1);
	});

  it('should not insert an empty user', async () => {
		const params = {
      username: undefined,
      password: undefined,
      email: undefined
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(`${ confiq.ERROR_MSG.post.MISSING_PARAMETER }username`);
    }
	});

  it('should not insert a user without password', async () => {
		const params = {
      username: confiq.TEST_DATA.user1.username,
      password: undefined,
      email: undefined
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(`${ confiq.ERROR_MSG.post.MISSING_PARAMETER }password`);
    }
	});

  it('should not insert a user without email', async () => {
		const params = {
      username: confiq.TEST_DATA.user1.username,
      password: confiq.TEST_DATA.user1.password,
      email: undefined
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(`${ confiq.ERROR_MSG.post.MISSING_PARAMETER }email`);
    }
	});

  it('should not insert an existing user', async () => {
		const params = {
      username: confiq.TEST_DATA.user1.username,
      password: confiq.TEST_DATA.user1.password,
      email: confiq.TEST_DATA.user1.email
    }
    try {
      let results = await post({ params });
    } catch (err) {
      expect(err.message).to.equal(confiq.ERROR_MSG.post.EXISTING_USER);
    }
	});

  it('should insert another user', async () => {
		const params = {
      username: confiq.TEST_DATA.user2.username,
      password: confiq.TEST_DATA.user2.password,
      email: confiq.TEST_DATA.user1.email
    }
    await post({ params });
    const query = {}
    const dbContent = await dbFindDocuments({ query, ...confiq.DB_CONFIG });
    expect(dbContent.length).to.equal(2)
	});
})