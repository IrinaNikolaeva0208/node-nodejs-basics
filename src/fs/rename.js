import fs from "fs";
import { resolve } from "path";

const rename = async () => {
    const path = resolve("files", "properFilename.txt");
    if (fs.existsSync(path)) throw new Error("FS operation failed");
    fs.rename(resolve("files", "wrongFilename.txt"), path, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await rename();
