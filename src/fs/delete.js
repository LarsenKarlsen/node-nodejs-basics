import * as path from "node:path"
import { unlink } from "node:fs/promises";

const remove = async () => {
    // Write your code here
    try {
        const filePath = path.normalize("./src/fs/files/fileToRemove.txt")
        await unlink(filePath)
    } catch (err) {
        throw new Error("FS operation failed")
    }

};

await remove();