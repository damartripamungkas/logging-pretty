const fs = require('fs');
const writeLogToFile = (pathFile, msg) => {
    // const pathlog = path.join(pathFile); // path.join(process.cwd(), "log", time.split(" ")[0] + ".log");
    try {
        fs.writeFileSync(pathFile, fs.readFileSync(pathFile, { encoding: "utf8" }) + "\n" + msg);
    } catch (err) {
        fs.writeFileSync(pathFile, msg);
    }
};

module.exports = writeLogToFile;