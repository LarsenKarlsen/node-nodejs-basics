import {writeFile} from "node:fs/promises"
import * as path from "node:path"


const create = async () => {
    // Write your code here
    try {
        const filePath = path.normalize("./src/fs/files/fresh.txt")
        await writeFile(filePath, "I am fresh and young", {flag:"wx"})
    }
    catch(err) {
        throw new Error("FS operation failed")
    }
};

await create();