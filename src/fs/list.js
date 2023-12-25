import * as path from "path"
import { readdir } from "fs/promises";


const list = async () => {
    // Write your code here
    try{
        const curDir = path.resolve(".", "src", "fs")
        const listDir = path.join(curDir, "files")
    
        const fileNames = await readdir(listDir)
        console.log(fileNames)
    } catch(err) {
        throw new Error("FS operation failed")
    }

};

await list();