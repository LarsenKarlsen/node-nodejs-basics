import {cp} from "node:fs/promises"
import * as path from "path"

const copy = async () => {
    // Write your code here
    try {
        const curDir = path.resolve(".", "src", "fs")
        
        const toCopyPath = path.join(curDir, "files")
        const destPath = path.join(curDir, "files_copy")
        await cp(toCopyPath, destPath, {
            "recursive": true,
            "force": false,
            "errorOnExist": true
            })
    } catch(err) {
        throw new Error("FS operation failed")
    }
};

await copy();
