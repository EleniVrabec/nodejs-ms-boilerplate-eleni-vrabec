const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = process.env.NODE_ENV;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const FILE_FOLDER_NAME = process.env.FILE_FOLDER_NAME;
const FILE_FOLDER_PATH = process.cwd() + process.env.NODE_FILE_FOLDER;
//const FILE_DB_NAME = process.env.FILE_DB_NAME;
const FILE_DB_NAME = process.env.NODE_DB_FILE;
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;
const MONGO_DB_URL = process.env.MONGO_DB_URL; // URL till MongoDb databasen
const MONGO_DB_NAME = process.env.MONGO_DB_NAME; // namn på MongoDb databasen
//const MONGO_DB_COLLECTION = process.env.MONGO_DB_COLL; // namn på collectionen i MongoDb databasen
const MONGO_DB_COLLECTION = process.env.MONGO_DB_COLLECTION;

const DB_CONFIG ={
    dbName:"db_my_app",
    dbUrl:`${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_NAME}`,
  /*   dbColl:process.env.MONGO_DB_COLL   */
  dbColl: 'coll_users' 
}
const ERROR_MSG ={
    post: {
        NO_DATA: 'No data inserted',
        EXISTING_USER: 'User already exists',
    }
};

export default Object.freeze({
    APP_NAME,
    ERROR_MSG,
    NODE_ENV,
    NODE_HOSTNAME,
    NODE_PORT,
    FILE_FOLDER_NAME,
    FILE_FOLDER_PATH,
    FILE_DB_NAME,
    FILE_DB_PATH,
    MONGO_DB_URL,
    MONGO_DB_NAME,
    MONGO_DB_COLLECTION,
    DB_CONFIG
})