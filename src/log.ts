import chalk from "chalk";
import getTimeNow from "./time";
import { append, write } from "./writeFile";
type TypeArgs = string | null | undefined;
/**
 * @param pathFolderLog example "./db.log" if path dont have file, script will create and write new file
 * @returns object
 */
const init = (pathFolderLog: TypeArgs, hashTag: TypeArgs, enableConsole = true, clearBeforeStartForFile = false) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk;
  const isFoundPathFolderLog = pathFolderLog === null || pathFolderLog === undefined ? null : true;
  if (clearBeforeStartForFile === true && isFoundPathFolderLog === true) {
    write(pathFolderLog, "");
  }

  const renderLog = (tag: string, msg: string, chalkFunc: any, chalkFuncBackground: any) => {
    const time = getTimeNow();
    msg = hashTag === undefined || hashTag === null ? msg : `#${hashTag} ${msg}`;
    chalkFuncBackground = chalkFuncBackground === undefined ? msg : chalkFuncBackground(msg);
    if (enableConsole === true) {
      console.log(`[${time}] [${chalkFunc(tag)}] ${chalkFuncBackground}`);
    }

    if (isFoundPathFolderLog === true) {
      append(pathFolderLog, `[${time}] [${tag}] ${msg}`);
    }
  };

  return {
    info: (msg: string) => renderLog("INFO", msg, green, undefined),
    warn: (msg: string) => renderLog("WARN", msg, yellow, yellow),
    error: (msg: string) => renderLog("ERR", msg, red, red),
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
