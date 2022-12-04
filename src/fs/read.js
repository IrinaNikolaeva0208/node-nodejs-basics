import { readFile } from "fs";
import { resolve } from "path";

const read = async () => {
    readFile(
        resolve("files", "fileToRead.txt"),
        { encoding: "utf-8" },
        (err, data) => {
            if (err) throw new Error("FS operation failed");
            console.log(data);
        }
    );
};

await read();
