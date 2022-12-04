import { createReadStream } from "fs";

const read = async () => {
    const rs = createReadStream("./files/fileToRead.txt", {
        encoding: "utf-8",
    });
    rs.on("data", (chunk) => process.stdout.write(chunk));
};

await read();
