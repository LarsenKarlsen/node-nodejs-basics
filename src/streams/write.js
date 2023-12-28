import * as path from "path"
import fs from "fs"
import readline from "readline"

const write = async () => {
    // Write your code here
    const filePath = path.resolve("./src/streams/files/fileToWrite.txt")
    const ws = fs.createWriteStream(filePath)

    ws.on("error", (err) => {
        console.log(err)
    })

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Enter your message or type exit to end: => "
    })

    rl.prompt()

    rl.on("line", line => {
        switch(line.trim()) {
            case "exit":
                rl.close()
                break
            default:
                ws.write(line+"\n")
                rl.prompt()
                break
        }
    }).on("close", ()=>{
         ws.end()
         ws.on("finish", ()=>{
            console.log(`Text data saved to  ${filePath}`)
         })
        })
};

await write();