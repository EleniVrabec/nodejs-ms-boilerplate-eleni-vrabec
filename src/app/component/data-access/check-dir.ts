export default function makeCheckDir({access, mkdir, logger}){
    return Object.freeze({
        checkDir
    })
    async function checkDir({fileDirPath, fileDirName}){
        try{
            logger.info(`[DATA-ACCESS] [CHECK-DIR] Checking ${fileDirName}`);

            await access(fileDirPath);
            logger.info (`[DATA-ACCESS] [CHECK-DIR] Directory ${fileDirName} exists`)
            return;
        }catch(err){
            logger.info(`[DATA-ACCESS] [CHECK-DIR]Creating ${fileDirName}`);
            await mkdir(fileDirPath);
            logger.info (`[DATA-ACCESS] [CHECK-DIR] Directory ${fileDirName} created`)
            return;
        }

    }
}