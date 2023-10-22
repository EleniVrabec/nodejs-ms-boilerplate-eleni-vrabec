import * as path from 'path';

/* const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = process.env.NODE_ENV;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const FILE_FOLDER_NAME = process.env.FILE_FOLDER_NAME;
const FILE_FOLDER_PATH = process.cwd() + process.env.NODE_FILE_FOLDER;
const FILE_DB_NAME = process.env.FILE_DB_NAME;
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`; */

const APP_NAME = "AUTH-MS-TEST";
const NODE_ENV ="test";
//const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
//const NODE_PORT = process.env.NODE_PORT;
const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "/data/");
const FILE_DB_NAME = "users.json";

const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;

const ERROR_MSG ={
    post: {
        MISSING_PARAMETER: 'undefinedusername',
        //NO_DATA: 'No data inserted',
        EXISTING_USER: 'User already exists',
    }
};

const TEST_DATA = {
    user1:{
        username:"user1",
        password:"password1"
    },
    user2:{
        username:"user2",
        password:"password2"
    }
}

export default Object.freeze({
    APP_NAME,
    ERROR_MSG,
    NODE_ENV,
    //NODE_HOSTNAME,
    //NODE_PORT,
    FILE_FOLDER_NAME,
    FILE_FOLDER_PATH,
    FILE_DB_NAME,
    FILE_DB_PATH,
    TEST_DATA
})