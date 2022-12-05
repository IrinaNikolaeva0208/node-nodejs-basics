import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const compress = async () => {
    const gz = createGzip();
    const ws = createWriteStream("./files/archive.gz");
    const rs = createReadStream("./files/fileToCompress.txt");
    rs.pipe(gz).pipe(ws);
};

await compress();
