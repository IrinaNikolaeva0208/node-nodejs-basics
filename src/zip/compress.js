import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
//use npm run
const compress = async () => {
    const gz = createGzip();
    const ws = createWriteStream(resolve("src", "zip", "files", "archive.gz"));
    const rs = createReadStream(
        resolve("src", "zip", "files", "fileToCompress.txt")
    );
    rs.pipe(gz).pipe(ws);
};

await compress();
