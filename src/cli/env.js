const parseEnv = () => {
    const rssVars = Object.keys(process.env).filter((key) =>
        key.includes("RSS_")
    );
    const varsString = rssVars
        .map((key) => `${key}=${process.env[key]}`)
        .join("; ");
    console.log(varsString);
};
parseEnv();
