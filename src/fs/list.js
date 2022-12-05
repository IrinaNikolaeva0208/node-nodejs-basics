import { readdir } from "node:fs";
import { resolve } from "node:path";
//use npm run
const list = async () => {
    readdir(resolve("src", "fs", "files"), (err, files) => {
        if (err) throw new Error("FS operation failed");
        console.log(files);
    });
};

await list();
