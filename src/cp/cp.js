import { fork } from "node:child_process";
import { resolve } from "node:path";
//use npm run
const spawnChildProcess = async (...args) => {
    fork(resolve("src", "cp", "files", "script.js"), args);
};

spawnChildProcess(0, 0);
