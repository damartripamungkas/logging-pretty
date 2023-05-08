const chalk = require('chalk');
const { red, green, yellow, cyan, blue, bgRed } = chalk;
const [getTimeNow, writeLogToFile] = [require('./time'), require('./writeFile')];

/**
 * 
 * @param pathFolderLog example "./db.log" if path dont have file, script will create and write new file
 * @returns object
 */
const init = (pathFolderLog = "", tagId = "") => {
    if (tagId.length == 0) tagId = undefined;

    const isFoundPathFolderLog = pathFolderLog.length == 0 ? null : true;
    const renderLog = (tag, msg, chalkFunc, chalkFuncBackground = null) => {
        const time = getTimeNow();
        const content = tagId === undefined ? msg : `[${tagId}] ${msg}`;
        console.log(`[${time}] [${chalkFunc(tag)}] ${chalkFuncBackground === null ? content : chalkFuncBackground(content)}`);
        if (isFoundPathFolderLog === true) {
            writeLogToFile(pathFolderLog, `[${time}] [${tag}] ${msg}`);
        }
    };

    return {
        info: (msg = "") => renderLog("INFO", msg, green),
        warn: (msg = "") => renderLog("WARN", msg, yellow),
        error: (msg = "") => renderLog("ERRR", msg, red, red),
        success: (msg = "") => renderLog("SUCCESS", msg, green, green),
        debug: (msg = "") => renderLog("DEBUG", msg, cyan),
        trace: (msg = "") => renderLog("TRACE", msg, blue),
        fatal: (msg = "") => renderLog("FATAL", msg, red, bgRed),
        custom: (tag = "", msg = "", colorTag = {}, colorMsg = {}) => renderLog(tag, msg, colorTag, colorMsg),
        listColor: chalk
    };
};

module.exports = init;