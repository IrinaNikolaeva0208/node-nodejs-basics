import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { createRequire } from "node:module";
//use npm run
const require = createRequire(import.meta.url);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require(path.resolve("src", "modules", "files", "a.json"));
} else {
    unknownObject = require(path.resolve("src", "modules", "files", "b.json"));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(
    `Path to current file is ${path.resolve(
        "src",
        "modules",
        path.basename("esm.mjs")
    )}`
);
console.log(
    `Path to current directory is ${path.resolve(
        "src",
        "modules",
        path.dirname("esm")
    )}`
);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export default {
    unknownObject,
    myServer,
};
