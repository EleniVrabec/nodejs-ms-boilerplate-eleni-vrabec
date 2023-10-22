/* koden i express.ts är en modul som konfigurerar och 
startar en Express.js-server med olika middleware och routing.
 Den exporteras som en funktion createServer som tar
  in konfigurationsparametrar, och den inre server-funktionen 
  används för att faktiskt starta servern med de angivna inställningarna. */

import { routes } from "../../../component/controller";

  //const fs = require("fs");
export default function createServer({
    json, 
    urlencoded, 
    app, 
    cors, 
    compression,
     helmet, 
     logger, 
}) {
    return Object.freeze({server})

    function server({hostname, port}) {
        app.use(helmet());
        app.options('*', cors({credentials: true, origin: true}));
        app.use(cors());
        app.use(compression())
        app.use(json())
        app.use(urlencoded({extend:true}))

        app. use((req, res, next ) => {
            logger.info (`[EXPRESS] Conection received: ${req.ip}: ${req.path}: ${req.method}`);
            next();
        })

        for(let route of routes){
            app[route.method](`${route.path}`, route.component);
        }
             

        app.listen(port, hostname, () => {
            logger.info(`[EXPRESS] Server running at  http://${hostname}:${port}/ `);
            return;
        })
    }
}