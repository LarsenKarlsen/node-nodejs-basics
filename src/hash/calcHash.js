import * as path from "path"
import {createReadStream} from 'node:fs';


const calculateHash = async () => {
    // Write your code here
    const filePath = path.resolve("src/hash/files/fileToCalculateHashFor.txt")
    const {createHmac} = await import('node:crypto');
    const hmac = createHmac('sha256', 'topSecretWord');
    const input = createReadStream(filePath);
    input.on('readable', () => {
        const data = input.read();
        if (data) {
            hmac.update(data);
        } else {
            console.log(`${hmac.digest('hex')} ${filePath}`);
        }
    });
};

await calculateHash();