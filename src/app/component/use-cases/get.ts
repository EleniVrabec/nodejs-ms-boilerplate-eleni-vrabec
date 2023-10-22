import { access } from 'node:fs/promises';
export default function createGet({access, readFile, logger }) {
    return Object.freeze({ get })
    
    async function get({ params, filePath, filename }){
      try {
        logger.info(`[USE-CASE][GET] Reading from file${ filename } - START!`);
        await access(filePath)
        const fileContent = await readFile(filePath)
        logger.info(`[USE-CASE][GET] Reading from file${ filename } - DONE!`);
        //return JSON.parse(fileContent)
        return JSON.parse(fileContent);
        
      } catch (e) {
        //throw e.message
        throw new Error(`Failed to access, read, or parse the file: ${e.message}`);
      }
    }
  }