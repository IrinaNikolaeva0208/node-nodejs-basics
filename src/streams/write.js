import { createWriteStream } from "node:fs";
import { resolve } from "node:path";
//use npm run
const write = async () => {
    const ws = createWriteStream(
        resolve("src", "streams", "files", "fileToWrite.txt")
    );
    process.stdin.on("data", (chunk) => {
        ws.write(chunk.toString().trim());
        process.exit();
    });
};

await write();
