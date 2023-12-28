import fs from "fs"
import * as path from "path"


const read = async () => {
    // Write your code here
    const filePath = path.resolve("./src/streams/files/fileToRead.txt")
    const rs = fs.createReadStream(filePath, "utf-8")

    rs.on("error", err => {
        console.log(err)
    })

    rs.on("data", data => {
        process.stdout.write(data)
    })
};

await read();