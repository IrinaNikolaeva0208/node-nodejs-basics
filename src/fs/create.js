import { writeFile, existsSync } from "node:fs";
import { resolve } from "node:path";
//use npm run
const create = async () => {
    const path = resolve("src", "fs", "files", "fresh.txt");
    if (existsSync(path)) throw new Error("FS operation failed");
    writeFile(path, "I am fresh and young", (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await create();
