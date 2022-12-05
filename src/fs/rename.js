import fs from "node:fs";
import { resolve } from "node:path";
//use npm run
const rename = async () => {
    const path = resolve("src", "fs", "files", "properFilename.txt");
    if (fs.existsSync(path)) throw new Error("FS operation failed");
    fs.rename(
        resolve("src", "fs", "files", "wrongFilename.txt"),
        path,
        (err) => {
            if (err) throw new Error("FS operation failed");
        }
    );
};

await rename();
