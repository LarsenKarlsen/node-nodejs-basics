import * as path from "path"
import { rename as asyncRename } from "fs/promises";


const rename = async () => {
    // Write your code here
    try {
        const filePathToRename = path.resolve("./src/fs/files/wrongFilename.txt")
        const newFilePath = path.resolve("./src/fs/files/properFilename.md")
    
        await asyncRename(filePathToRename, newFilePath)
    } catch (err) {
        throw new Error("FS operation failed")
    }

};

await rename();