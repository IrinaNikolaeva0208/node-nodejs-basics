import { rm } from "node:fs";
import { resolve } from "node:path";
//use npm run
const remove = async () => {
    rm(resolve("src", "fs", "files", "fileToRemove.txt"), (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await remove();
