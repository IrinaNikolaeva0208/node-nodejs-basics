const parseArgs = () => {
    const procArgs = process.argv.slice(2);
    let argsString = "";
    for (let arg = 0; arg < procArgs.length; arg++) {
        argsString += procArgs[arg] + " is " + procArgs[++arg];
        if (procArgs[arg + 1]) argsString += ", ";
    }
    console.log(argsString);
};

parseArgs();
