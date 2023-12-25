import * as path from "path"
import { readFile } from "fs/promises";


const read = async () => {
    // Write your code here
    try {
        const filePathToRead = path.resolve("./src/fs/files/fileToRead.txt")
        const fileContent = await readFile(filePathToRead, "utf-8")
        console.log(fileContent)
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await read();