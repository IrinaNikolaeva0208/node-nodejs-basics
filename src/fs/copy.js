import { readFile, writeFile, existsSync, readdir, mkdir } from "fs";
import { resolve } from "path";

const copy = async () => {
    if (!existsSync("files") || existsSync("files_copy"))
        throw new Error("FS operation failed");
    mkdir("files_copy", (err) => {
        if (err) throw new Error("FS operation failed");
    });
    readdir("files", (err, files) => {
        if (err) throw new Error("FS operation failed");
        for (let file of files) {
            readFile(
                resolve("files", `${file}`),
                { encoding: "utf8" },
                (err, data) => {
                    if (err) throw new Error("FS operation failed");
                    writeFile(resolve("files_copy", `${file}`), data, (err) => {
                        if (err) throw new Error("FS operation failed");
                    });
                }
            );
        }
    });
};

await copy();
