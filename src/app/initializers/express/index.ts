/* denna kod konfigurerar och startar en Express.js-server med olika middleware och routing. Den använder en separat modul för att hantera konfiguration och uppsättning av servern, och den exporterar en server-funktion för att starta servern med angivna parametrar. */


import * as express from "express";
import * as compression from "compression";
import * as cors from "cors";
import * as helmet from "helmet";
import createServer from "./libs/express"
//import {routes} from "../../component/controller"
import {routes} from "../../component/controller/"
import {logger} from "./libs/logger";

const app = express(); //Detta är grunden för din webbserver där du   kommer att konfigurera vägar, middleware och andra inställningar.
/* const json = express.json;
const urlencoded = express.urlencoded; */

const server = ({hostname, port}) => 
createServer({
    json: express.json,
    urlencoded: express.urlencoded,
    app,
    cors,
    compression,
    helmet,
    logger,
})
.server({hostname, port });

export{
    server
}