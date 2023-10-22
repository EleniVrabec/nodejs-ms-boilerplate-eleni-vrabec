/* startkod för en Node.js-applikation som använder Express.js för att skapa en server. */


/* import * as dotenv from "dotenv";
dotenv.config() */
require("dotenv").config();
import confiq from "./confiq";
import { server } from "./initializers/express";

import { logger } from "../app/initializers/express/libs/logger";


try{
    logger.info(`[${confiq.APP_NAME}] Boostraping micro service`);
    server({hostname: confiq.NODE_HOSTNAME, port: confiq.NODE_PORT});
}catch(error){
    logger.error(`[${confiq.APP_NAME}]Caught exception: ${error}`)
}


