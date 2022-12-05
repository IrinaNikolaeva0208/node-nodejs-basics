import { readFile, writeFile, existsSync, readdir, mkdir } from "node:fs";
import { resolve } from "node:path";
//use npm run
const copy = async () => {
    const path = resolve("src", "fs", "files");
    const pathToCopy = resolve("src", "fs", "files_copy");
    if (!existsSync(path) || existsSync(pathToCopy))
        throw new Error("FS operation failed");
    mkdir(pathToCopy, (err) => {
        if (err) throw new Error("FS operation failed");
    });
    readdir(path, (err, files) => {
        if (err) throw new Error("FS operation failed");
        for (let file of files) {
            readFile(resolve(path, file), { encoding: "utf8" }, (err, data) => {
                if (err) throw new Error("FS operation failed");
                writeFile(resolve(pathToCopy, file), data, (err) => {
                    if (err) throw new Error("FS operation failed");
                });
            });
        }
    });
};

await copy();
