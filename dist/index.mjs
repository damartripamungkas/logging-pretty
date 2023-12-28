// src/log.ts
import chalk from "chalk";
import dayjs from "dayjs";
import { appendFile } from "fs/promises";
var getTimeNow = () => {
  return dayjs().format("YYYY-MM-DD HH:mm:ss:SSS");
};
var init = (pathFile, uniqTag, force) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk;
  const isFoundPathFile = pathFile === null || pathFile === void 0 ? false : true;
  force = force ? force : isFoundPathFile ? "all" : "console";
  const renderLog = (tag, msg, colorUniqTag, colorMsg) => {
    msg = uniqTag === void 0 || uniqTag === null ? msg : `#${uniqTag} ${msg}`;
    colorMsg = colorMsg === void 0 ? msg : colorMsg(msg);
    const time = getTimeNow();
    if (force == "console" || force == "all") {
      console.log(`[${time}] [${colorUniqTag(tag)}] ${colorMsg}`);
    }
    if (isFoundPathFile) {
      if (force == "file" || force == "all") {
        appendFile(pathFile, `[${time}] [${tag}] ${msg}
`);
      }
    }
  };
  return {
    info: (msg) => renderLog("INFO", msg, green, void 0),
    warn: (msg) => renderLog("WARN", msg, yellow, yellow),
    error: (msg) => renderLog("ERROR", msg, red, red),
    success: (msg) => renderLog("SUCCESS", msg, green, green),
    debug: (msg) => renderLog("DEBUG", msg, cyan, cyan),
    trace: (msg) => renderLog("TRACE", msg, blue, blue),
    fatal: (msg) => renderLog("FATAL", msg, red, bgRed),
    custom: (tag, msg, colorUniqTag = chalk.bold, colorMsg = chalk.white) => renderLog(tag, msg, colorUniqTag, colorMsg),
    _listColor: chalk,
    _renderLog: renderLog
  };
};
var log_default = init;

// src/index.ts
var src_default = log_default;
export {
  src_default as default
};
