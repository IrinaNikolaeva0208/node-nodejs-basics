import { createGunzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
    const gz = createGunzip();
    const ws = createWriteStream("./files/fileToCompress.txt");
    const rs = createReadStream("./files/archive.gz");
    rs.pipe(gz).pipe(ws);
};

await decompress();
