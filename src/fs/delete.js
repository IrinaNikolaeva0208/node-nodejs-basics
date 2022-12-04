import { rm } from "fs";
import { resolve } from "path";

const remove = async () => {
    rm(resolve("files", "fileToRemove.txt"), (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await remove();
