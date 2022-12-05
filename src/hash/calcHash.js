import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
//use npm run
const calculateHash = async () => {
    const fBuffer = readFileSync(
        resolve("src", "hash", "files", "fileToCalculateHashFor.txt")
    );
    const hash = createHash("SHA256");
    console.log(hash.update(fBuffer).digest("hex"));
};

await calculateHash();
