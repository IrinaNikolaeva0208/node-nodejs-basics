import { createWriteStream } from "fs";

const write = async () => {
    const ws = createWriteStream("./files/fileToWrite.txt");
    process.stdin.on("data", (chunk) => {
        ws.write(chunk.toString().trim());
        process.exit();
    });
};

await write();
