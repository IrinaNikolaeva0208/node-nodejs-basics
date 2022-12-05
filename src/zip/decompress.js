import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { resolve } from "node:path";
//use npm run
const decompress = async () => {
    const gz = createGunzip();
    const ws = createWriteStream(
        resolve("src", "zip", "files", "fileToCompress.txt")
    );
    const rs = createReadStream(resolve("src", "zip", "files", "archive.gz"));
    rs.pipe(gz).pipe(ws);
};

await decompress();
