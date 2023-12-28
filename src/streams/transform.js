import {Transform} from "stream"

const transform = async () => {
    // Write your code here
    const reverse = new Transform({
        transform(data, encoding, callback) {
            const reversedString = data.toString().split("").reverse().join("")
            this.push(reversedString)
            callback()
        }
    })

    process.stdin.pipe(reverse).on("data", data => {
        process.stdout.write(`Reverse string => ${data.toString().trim()}`)
        process.exit()
    })
};

await transform();