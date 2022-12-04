import { writeFile, existsSync } from "fs";
import { resolve } from "path";

const create = async () => {
    const path = resolve("files", "fresh.txt");
    if (existsSync(path)) throw new Error("FS operation failed");
    writeFile(path, "I am fresh and young", (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await create();
