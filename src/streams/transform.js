import { Transform } from "stream";
//use npm run
const transform = async () => {
    const ts = new Transform({
        transform(chunk, enk, cb) {
            const reverse =
                chunk.toString().trim().split("").reverse().join("") + "\n";
            cb(null, reverse);
        },
    });

    process.stdin.pipe(ts).pipe(process.stdout);
};

await transform();
