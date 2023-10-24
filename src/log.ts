import chalk from "chalk";
import getTimeNow from "./time";
import writeLogToFile from "./writeFile";

/**
 * @param pathFolderLog example "./db.log" if path dont have file, script will create and write new file
 * @returns object
 */
const init = (pathFolderLog: any, hashTag: string) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk;
  const isFoundPathFolderLog = pathFolderLog == null || pathFolderLog == undefined ? 0 : pathFolderLog.length == 0 ? null : true;
  const renderLog = (tag: string, msg: string, chalkFunc: any, chalkFuncBackground: any) => {
    const time = getTimeNow();
    chalkFuncBackground = chalkFuncBackground === undefined ? msg : chalkFuncBackground(msg);
    console.log(`[${time}] [${chalkFunc(tag)}] #${hashTag} ${chalkFuncBackground}`);

    if (isFoundPathFolderLog === true) {
      writeLogToFile(pathFolderLog, `[${time}] [${tag}] #${hashTag} ${msg}`);
    }
  };

  return {
    info: (msg: string) => renderLog("INFO", msg, green, undefined),
    warn: (msg: string) => renderLog("WARN", msg, yellow, yellow),
    error: (msg: string) => renderLog("ERRR", msg, red, red),
    success: (msg: string) => renderLog("SUCCESS", msg, green, green),
    debug: (msg: string) => renderLog("DEBUG", msg, cyan, cyan),
    trace: (msg: string) => renderLog("TRACE", msg, blue, blue),
    fatal: (msg: string) => renderLog("FATAL", msg, red, bgRed),
    custom: (tag: string, msg: string, colorTag = chalk.bold, colorMsg = chalk.white) => renderLog(tag, msg, colorTag, colorMsg),
    listColor: chalk,
    _renderLog: renderLog,
  };
};

export default init;
