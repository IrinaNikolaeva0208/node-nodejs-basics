import { readFile } from "node:fs";
import { resolve } from "node:path";
//use npm run
const read = async () => {
    readFile(
        resolve("src", "fs", "files", "fileToRead.txt"),
        { encoding: "utf-8" },
        (err, data) => {
            if (err) throw new Error("FS operation failed");
            console.log(data);
        }
    );
};

await read();
