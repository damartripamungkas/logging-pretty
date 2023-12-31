// src/log.ts
import chalk from "chalk";
import dayjs from "dayjs";
import { appendFile } from "fs/promises";
var getTimeNow = () => {
  return dayjs().format("YYYY-MM-DD HH:mm:ss:SSS");
};
var init = (pathFile, uniqTag, force, mid) => {
  const { red, green, yellow, cyan, blue, bgRed } = chalk;
  const isFoundPathFile = pathFile === null || pathFile === void 0 ? false : true;
  force = force ? force : isFoundPathFile ? "all" : "console";
  mid = mid === null || mid === void 0 ? (msg) => msg : mid;
  const renderLog = (tag, msg, colorUniqTag, colorMsg) => {
    msg = mid(msg, tag);
    msg = uniqTag === void 0 || uniqTag === null ? msg : `#${uniqTag} ${msg}`;
    const time = getTimeNow();
    if (force == "console" || force == "all") {
      colorMsg = colorMsg === void 0 ? msg : colorMsg(msg);
      console.log(`[${time}] [${colorUniqTag(tag)}] ${colorMsg}`);
    }
    const txtFile = `[${time}] [${tag}] ${msg}
`;
    if (isFoundPathFile) {
      if (force == "file" || force == "all") {
        appendFile(pathFile, txtFile);
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
