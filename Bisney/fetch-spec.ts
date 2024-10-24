import fs from 'node:fs';
import openapiTS from 'openapi-typescript'

const fetchSpec = async ()=>{
    const types = await openapiTS('https://developer.themoviedb.org/openapi/6453cc549c91cf004cd2a015');
    fs.writeFileSync('./types.ts' , types as unknown as string)    
}

setInterval(fetchSpec , 10_000)