import { createHash } from "crypto";
import { readFileSync } from "fs";

const calculateHash = async () => {
    const fBuffer = readFileSync("./files/fileToCalculateHashFor.txt");
    const hash = createHash("SHA256");
    console.log(hash.update(fBuffer).digest("hex"));
};

await calculateHash();
