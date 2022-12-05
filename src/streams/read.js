import { createReadStream } from "node:fs";
import { resolve } from "node:path";
//use npm run
const read = async () => {
    const rs = createReadStream(
        resolve("src", "streams", "files", "fileToRead.txt"),
        {
            encoding: "utf-8",
        }
    );
    rs.on("data", (chunk) => process.stdout.write(chunk));
};

await read();
