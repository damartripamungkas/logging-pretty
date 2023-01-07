const { bold, whiteBright, redBright, greenBright, yellowBright, cyanBright, blueBright, red, bgRed } = require('chalk');
const [getTimeNow, writeLogToFile] = [require('./time'), require('./writeFile')];

/**
 * 
 * @param pathFolderLog example "./db.log" if path dont have file, script will create and write new file
 * @returns object
 */
const init = (pathFolderLog = "") => {
    const isFoundPathFolderLog = pathFolderLog.length == 0 ? null : true;
    const renderLog = (tag, msg, chalkFunc, chalkFuncBackground = null) => {
        const time = getTimeNow();
        console.log(`[${time}] [${chalkFunc(tag)}] ${chalkFuncBackground === null ? whiteBright(msg) : chalkFuncBackground(whiteBright(msg))}`);
        if (isFoundPathFolderLog === true) {
            writeLogToFile(pathFolderLog, `[${time}] [${tag}] ${msg}`);
        }
    };

    return {
        info: (msg = "") => renderLog("INFO", msg, greenBright),
        warn: (msg = "") => renderLog("WARN", msg, yellowBright),
        error: (msg = "") => renderLog("ERRR", msg, redBright),
        debug: (msg = "") => renderLog("DEBUG", msg, cyanBright),
        trace: (msg = "") => renderLog("TRACE", msg, blueBright),
        fatal: (msg = "") => renderLog("FATAL", msg, red, bgRed),
        custom: (tag = "", msg = "") => renderLog(tag, msg, bold)
    };
};

module.exports = init;