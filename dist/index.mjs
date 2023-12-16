// src/log.ts
import chalk from "chalk";

// src/time.ts
import dayjs from "dayjs";
var time_default = () => dayjs().format("YYYY-MM-DD HH:mm:ss:SSS");

// src/writeFile.ts
import { appendFile, writeFile } from "fs/promises";
var append = (pathFile, msg) => appendFile(pathFile, msg + "\n");
var write = (pathFile, msg) => writeFile(pathFile, msg);

// src/log.ts
var init = (pathFolderLog, hashTag, enableConsole = true, clearBeforeStartForFile = false) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk;
  const isFoundPathFolderLog = pathFolderLog === null || pathFolderLog === void 0 ? null : true;
  if (clearBeforeStartForFile === true && isFoundPathFolderLog === true) {
    write(pathFolderLog, "");
  }
  const renderLog = (tag, msg, chalkFunc, chalkFuncBackground) => {
    const time = time_default();
    msg = hashTag === void 0 || hashTag === null ? msg : `#${hashTag} ${msg}`;
    chalkFuncBackground = chalkFuncBackground === void 0 ? msg : chalkFuncBackground(msg);
    if (enableConsole === true) {
      console.log(`[${time}] [${chalkFunc(tag)}] ${chalkFuncBackground}`);
    }
    if (isFoundPathFolderLog === true) {
      append(pathFolderLog, `[${time}] [${tag}] ${msg}`);
    }
  };
  return {
    info: (msg) => renderLog("INFO", msg, green, void 0),
    warn: (msg) => renderLog("WARN", msg, yellow, yellow),
    error: (msg) => renderLog("ERR", msg, red, red),
    success: (msg) => renderLog("SUCCESS", msg, green, green),
    debug: (msg) => renderLog("DEBUG", msg, cyan, cyan),
    trace: (msg) => renderLog("TRACE", msg, blue, blue),
    fatal: (msg) => renderLog("FATAL", msg, red, bgRed),
    custom: (tag, msg, colorTag = chalk.bold, colorMsg = chalk.white) => renderLog(tag, msg, colorTag, colorMsg),
    listColor: chalk,
    _renderLog: renderLog
  };
};
var log_default = init;

// src/index.ts
var src_default = log_default;
export {
  src_default as default
};
