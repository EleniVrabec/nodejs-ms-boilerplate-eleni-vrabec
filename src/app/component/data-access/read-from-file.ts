import { log } from "console"

export default function makeReadFromFile({readFile, logger}) {
    return Object.freeze({readFromFile})

    async function readFromFile({filePath, filename}) {
        try{
            logger.info(`[DATA-ACCESS] [READ-FROM-FILE] Reading from ${filename} -START!`)
            const content = await readFile(filePath, {encoding: "utf-8"});
            logger.info(`[DATA-ACCESS] [READ-FROM-FILE] Reading from ${filename} -END!`)
      
            return content && content.length ? JSON.parse(content) : []
        
    }catch(e){
        logger.info(`[DATA-ACCESS] [READ-FROM-FILE]  ${filename} -FAILED`)
        if(e.message.includes("no such file or directory")) return[]
        throw e;
    }
}
}